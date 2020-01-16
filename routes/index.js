/**
 * Autor: Fernando Mendoza Escobar
 */

const express = require('express')
const app = express() //obtiene el objeto express
const { exec } = require('child_process')
const fs = require('fs')
var cors = require('cors')
let CryptoJS = require('crypto-js')
const axios = require('axios')
const qs = require('qs')
const config = require('../utilitarios/configData')
const image2base64 = require('image-to-base64')
const { finderCIC, finderCPOP } = require('../utilitarios/imageFinder')

// app.use(express.json()) // linea de código encargado de hacer conocer el formato JSON

let bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '100MB' }))
app.use(bodyParser.urlencoded({ limit: '100MB', extended: true }))

app.all('/user', (req, res, next) => {
  console.log('Por aqui paso')
  next()
}) // método express encargado de pasen toda las ruras (/user)

app.get('/user', (req, res) => {
  res.json({
    username: 'Cameron',
    lastname: 'Howe'
  }) //responde la petición
}) //recibe una peticion HTTP(get) y realiza algo

// Creación de Router CIC
app.post('/cic/', cors(), (req, res) => {
  console.log(req.body)
  let user = req.body.user
  let password = req.body.password
  let ciCliente = req.body.ciCliente
  // let bytes = CryptoJS.AES.decrypt(password, 'PASSWORD')
  // password = bytes.toString(CryptoJS.enc.Utf8)
  console.log('Datos:', user, ciCliente, password)

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
        `./test_image/pdf/${ciCliente}-${user}-CIC.pdf`,
        err => {
          if (err) throw err
          console.log('Nombre Editado Satisfactoriamente')
          let obj = {
            ciCliente: ciCliente,
            user: user,
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
            image2base64(`${config.url}/test_image/image/${ciCliente}-${user}-CIC.png`)
              .then(response => {
                axios
                  .post(
                    config.urlImage,
                    qs.stringify({
                      img: response
                    })
                  )
                  .then(function(response) {
                    console.log(response)
                    let dato = response.data.data.prediction
                    let autorizacion = finderCIC(dato).autorizacion
                    let obj = finderCIC(dato)
                    console.log('Autorización:', autorizacion, obj)

                    //Consulta CPOP
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
                          `./test_image/pdf/${ciCliente}-${user}-CPOP.pdf`,
                          err => {
                            if (err) throw err
                            console.log('Nombre Editado Satisfactoriamente')

                            let obj = {
                              ciCliente: ciCliente,
                              user: user,
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
                              res.send('Consulta exitoso') //request post
                            })
                          }
                        )
                      }
                    )
                  })
                  .catch(function(error) {
                    console.log(error)
                    res.send('Error al servivio reconociemnto de imagenes') //request post
                  })
              })
              .catch(error => {
                console.log(error) //Exepection error....
                res.send('Error al convertir png a base64')
              })
          })
        }
      )
    }
  )

  // console.log(req.params); //obtiene  datos del id (url) parametros
})

// Creación de Router CPO
app.post('/cpop/', cors(), (req, res) => {
  console.log(req.body)
  let user = req.body.user
  let password = req.body.password
  let ciCliente = req.body.ciCliente
  let autorizacion = req.body.autorizacion
  let bytes = CryptoJS.AES.decrypt(password, 'PASSWORD')
  // password = bytes.toString(CryptoJS.enc.Utf8)
  console.log('Datos:', user, ciCliente, password)

  exec(
    `npm --varUser=${user} --varPassword=${password} --varClienteCI=${ciCliente} --varAutorizacion=${autorizacion} test -- --tag cpop`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }
      console.log(`stdout: ${stdout}`)
      console.error(`stderr: ${stderr}`)
      fs.rename(
        './test_image/pdf/rptCertificadoCPOP.pdf',
        `./test_image/pdf/${ciCliente}-${user}-CPOP.pdf`,
        err => {
          if (err) throw err
          console.log('Nombre Editado Satisfactoriamente')

          let obj = {
            ciCliente: ciCliente,
            user: user,
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
              return
            }
            console.log(`stdout: ${stdout}`)
            console.error(`stderr: ${stderr}`)
            res.send('POST REQUEST RECEIVED') //request post
          })
        }
      )
    }
  )
})

app.listen(5000, () => {
  console.log('Serve on port 5000')
}) //levantar el servicio
