/**
 * Autor: Fernando Mendoza Escobar
 */

const express = require('express')
const app = express()
const { exec } = require('child_process')
const fs = require('fs')
var cors = require('cors')
let CryptoJS = require('crypto-js')
const axios = require('axios')
const qs = require('qs')
const config = require('../utilitarios/configData')
const image2base64 = require('image-to-base64')
const { finderCIC, finderCPOP } = require('../utilitarios/imageFinder')
let bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '100MB' }))
app.use(bodyParser.urlencoded({ limit: '100MB', extended: true }))


app.get('/user', (req, res) => {
  res.json({
    username: 'Cameron',
    lastname: 'Howe'
  }) 
})

// Creación de Router CIC
app.post('/cic', cors(), (req, res) => {
  console.log(req.body)
  let user = req.body.user.toLowerCase()
  let password = req.body.password
  let _ciCliente = req.body.ciCliente.trim()
  let ciCliente = _ciCliente.split(' ').join('')
  let codigoUsuario = req.body.codigoUsuario
  let ruta = req.body.ruta
  let bytes = CryptoJS.AES.decrypt(password, 'PASSWORD')
  password = bytes.toString(CryptoJS.enc.Utf8)

  console.log('Datos:', user, ciCliente, password)

  // Fecha
  var f = new Date()
  let fecha = `${f.getDate()}-${f.getMonth() + 1}-${f.getFullYear()}`

  exec(
    `npm --varUser=${user} --varPassword=${password} --varclienteCI=${ciCliente} test -- --tag idepro`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        res.send('Error al consultar CIC')
        return
      }
      fs.rename(
        './test_image/pdf/rptDeudaEntidad.pdf',
        `./test_image/pdf/${ciCliente}-${codigoUsuario}-CIC-${fecha}.pdf`,
        err => {
          if (err) throw err
          console.log('Nombre Editado Satisfactoriamente')
          let obj = {
            ciCliente: ciCliente,
            user: codigoUsuario,
            autorizacion: null
          }
          let listadoPorHacer = []
          listadoPorHacer.push(obj)
          let data = JSON.stringify(listadoPorHacer)
          fs.writeFile('file/data.json', data, err => {
            if (err) throw new Error('No se puedo grabar', err)
          })

          exec('node test_image/quicktest.js', (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`)
              res.send('Error al cambiar formato pdf a png CIC')
              return
            }
            image2base64(
              `${config.url}/test_image/image/${ciCliente}-${codigoUsuario}-CIC-${fecha}.png`
            )
              .then(responseBase64 => {
                axios
                  .post(
                    config.urlImage,
                    qs.stringify({
                      img: responseBase64
                    })
                  )
                  .then(function(response) {
                    let dato = response.data.data.prediction
                    let autorizacion = finderCIC(dato).autorizacion
                    let obj = finderCIC(dato)
                    console.log('Autorización:', autorizacion, obj)
                    let imageNames = `${ciCliente}-${codigoUsuario}`
                    let imageNameCIC = `${imageNames}-CIC-${fecha}`
                    let dirCIC = finderCIC(dato).carteraDIR
                    let base64CIC = responseBase64

                    exec(
                      `move test_image\\image\\${imageNames}-CIC-${fecha}.png ${config.rutaFisa}\\${ruta}`,
                      (error, stdout, stderr) => {
                        if (error) {
                          console.error(`exec error: ${error}`)
                          res.send({
                            Resultado:
                              'Archivo no encontrado para mover a la ruta.',
                            Correcto: false
                          })
                          return
                        }
                        console.log(`stdout: ${stdout}`)
                        console.error(`stderr: ${stderr}`)

                        res.send({
                          imageNameCIC,
                          base64CIC,
                          dirCIC,
                          autorizacion,
                          fecha,
                          Resultado: 'Consulta CIC finalizadaa correctamente.',
                          Correcto: true,
                          Tipo: 'cic'
                        })
                        return
                      }
                    )
                  })
                  .catch(function(error) {
                    console.log(error)
                    res.send('Error al servivio reconociemnto de imagenes')
                  })
              })
              .catch(error => {
                console.log(error)
                res.send('Error al convertir png a base64')
              })
          })
        }
      )
    }
  )
})

// Creación de Router CPOP
app.post('/cpop/', cors(), (req, res) => {
  console.log(req.body)
  let user = req.body.user.toLowerCase()
  let password = req.body.password
  let _ciCliente = req.body.ciCliente.trim()
  let ciCliente = _ciCliente.split(' ').join('')
  let codigoUsuario = req.body.codigoUsuario
  let ruta = req.body.ruta
  let bytes = CryptoJS.AES.decrypt(password, 'PASSWORD')
  let autorizacion = req.body.autorizacion
  password = bytes.toString(CryptoJS.enc.Utf8)

  // Fecha
  var f = new Date()
  let fecha = `${f.getDate()}-${f.getMonth() + 1}-${f.getFullYear()}`

  console.log('Datos:', user, ciCliente, password)

  // Consulta CPOP
  exec(
    `npm --varUser=${user} --varPassword=${password} --varClienteCI=${ciCliente} --varAutorizacion=${autorizacion} test -- --tag cpop`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        res.send('Error al consultar CPOP')
        return
      }
      console.log(`stdout: ${stdout}`)
      console.error(`stderr: ${stderr}`)
      fs.rename(
        './test_image/pdf/rptCertificadoCPOP.pdf',
        `./test_image/pdf/${ciCliente}-${codigoUsuario}-CPOP-${fecha}.pdf`,
        err => {
          if (err) throw err
          console.log('Nombre Editado Satisfactoriamente')

          let obj = {
            ciCliente: ciCliente,
            user: codigoUsuario,
            autorizacion: autorizacion
          }
          let listadoPorHacer = []
          listadoPorHacer.push(obj)
          let data = JSON.stringify(listadoPorHacer)
          fs.writeFile('file/data.json', data, err => {
            if (err) throw new Error('No se puedo grabar', err)
          })

          exec('node test_image/quicktest.js', (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`)
              res.send('Error al cambiar formato pdf a png CPOP')
              return
            }

            image2base64(
              `${config.url}/test_image/image/${ciCliente}-${codigoUsuario}-CPOP-${fecha}.png`
            ).then(responseBase64 => {
              axios
                .post(
                  config.urlImage,
                  qs.stringify({
                    img: responseBase64
                  })
                )
                .then(function(response) {
                  let dato = response.data.data.prediction
                  let cumplimientoCIC = finderCPOP(dato)
                  console.log('Autorización:', cumplimientoCIC, obj)
                  let imageNames = `${ciCliente}-${codigoUsuario}`
                  let imageNameCPOP = `${imageNames}-CPOP-${fecha}`
                  let base64CPOP = responseBase64

                  exec(
                    `move test_image\\image\\${imageNames}-CPOP-${fecha}.png ${config.rutaFisa}\\${ruta}`,
                    (error, stdout, stderr) => {
                      if (error) {
                        console.error(`exec error: ${error}`)
                        res.send({
                          Resultado:
                            'Archivo no encontrado para mover a la ruta.',
                          Correcto: false
                        })
                        return
                      }
                      console.log(`stdout: ${stdout}`)
                      console.error(`stderr: ${stderr}`)
                      res.send({
                        fecha,
                        imageNameCPOP,
                        base64CPOP,
                        cumplimientoCIC,
                        Resultado: 'Consulta CIC finalizadaa correctamente.',
                        Correcto: true,
                        Tipo: 'cpop'
                      })
                      return
                    }
                  )
                })
            })
          })
        }
      )
    }
  )
})

app.listen(7000, () => {
  console.log('Serve on port 7000')
})
