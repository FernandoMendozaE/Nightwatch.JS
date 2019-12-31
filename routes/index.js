const express = require('express')
const app = express() //obtiene el objeto express
const { exec } = require('child_process')
const fs = require('fs')
var cors = require('cors')
let CryptoJS = require('crypto-js')
const axios = require('axios')
const qs = require('qs')
const config = require('../configData')
const image2base64 = require('image-to-base64')
const { finder } = require('../imageFinder')

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

// Creación de Router
app.post('/user/', cors(), (req, res) => {
  console.log(req.body)
  let user = req.body.user
  let ciCliente = req.body.ciCliente
  let password = req.body.password
  let bytes = CryptoJS.AES.decrypt(password, 'PASSWORD')
  password = bytes.toString(CryptoJS.enc.Utf8)
  console.log('Datos:', user, ciCliente, password)

  exec(
    `npm --varUser=${user} --varPassword=${password} --varclienteCI=${ciCliente} test -- --tag dnsia`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }
      console.log(`stdout: ${stdout}`)
      console.error(`stderr: ${stderr}`)
      fs.rename(
        './test_image/pdf/ejemplo_esp.pdf',
        `./test_image/pdf/${user}-${password}.pdf`,
        err => {
          if (err) throw err
          console.log('Nombre Editado Satisfactoriamente')

          let obj = {
            user: user,
            password: password
          }
          let listadoPorHacer = []
          listadoPorHacer.push(obj)
          let data = JSON.stringify(listadoPorHacer)
          fs.writeFile('db/data.json', data, err => {
            if (err) throw new Error('No se puedo grabar', err)
          })

          exec('node test_image/quicktest.js', (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`)
              return
            }

            image2base64(`${config.url}/test_image/image/9192540-.png`)
              .then(response => {
                // console.log(response) //iVBORw0KGgoAAAANSwCAIA...
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
                    let autorizacion = finder(dato).autorizacion
                    let obj = finder(dato)
                    console.log('Autorización:', autorizacion, obj)
                    console.log(`stdout: ${stdout}`)
                    console.error(`stderr: ${stderr}`)
                    exec(
                      'npm --varUser=${user} --varPassword=${autorizacion} --varclienteCI=${autorizacion} test -- --tag google',
                      (error, stdout, stderr) => {
                        if (error) {
                          console.error(`exec error: ${error}`)
                          return
                        }
                        res.send('POST REQUEST RECEIVED') //request post
                      }
                    )
                  })
                  .catch(function(error) {
                    console.log(error)
                    res.send('POST REQUEST RECEIVED ERROR') //request post
                  })
              })
              .catch(error => {
                console.log(error) //Exepection error....
              })
          })
        }
      )
    }
  )

  // console.log(req.params); //obtiene  datos del id (url) parametros
})

app.listen(5000, () => {
  console.log('Serve on port 5000')
}) //levantar el servicio
