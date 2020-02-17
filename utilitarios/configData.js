// const url = '/home/linuxlite/ProyectosLinux/Node/Nightwatch.JS'
// const url = 'c:/Users/Lopez/Desktop/Robotizacion/union/Nightwatch.JS' //Windows Freddy
const url = '/home/linuxlite/servicios/servicioRobotizacion' //Servidor Idepro
// const url = 'C:/Users/Desktop/Desktop/Robotizacion/Nightwatch.JS' //Maquina Fer
//const urlImage = 'http://10.0.1.59:4500/reconocimiento/caracter'
const urlImage = 'http://200.105.146.210:4500/reconocimiento/caracter'
const time = '2000'
let rutaFisa = `c:\\inetpub\\wwwroot\\FroddiIdepro\\Aplicacion\\recursos` // Servidor idepro
// let rutaFisa = `c:\\sistemas\\FroddiUsuario\\public\\recursos` //Maquina Fer

let port = 7000

module.exports = { url, urlImage, time, rutaFisa, port }
