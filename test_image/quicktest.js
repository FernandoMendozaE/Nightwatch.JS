var pdf2png = require('../lib/pdf2png.js')
var fs = require('fs')
var listadoPorHacer = require('../db/data.json')
let user = listadoPorHacer[0]['user']
let password = listadoPorHacer[0]['password']
console.log('listadoPorHacer!!!!!!!!!!!!', user, password)

var projectPath = __dirname.split('\\')

// console.log('__dirname', __dirname);
projectPath.pop()
projectPath = projectPath.join('\\')

var gsPath = projectPath + '\\executables\\ghostScript'

// Rewrite the ghostscript path
pdf2png.ghostscriptPath = gsPath

// Example with higher quality
pdf2png.convert(__dirname + '/pdf/rptDeudaEntidad.pdf', { quality: 200 }, function(resp) {
  if (!resp.success) {
    console.log('Something went wrong: ' + resp.error)

    return
  }

  console.log("Yayy the pdf got converted, now I'm gonna save it!")

  fs.writeFile(`test_image/image/${user}-${password}.png`, resp.data, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log('The file was saved!')
    }
  })
})
