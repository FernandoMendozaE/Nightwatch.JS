const fs = require("fs");
module.exports = {
  '@tags': ['impuestos'],
  'Google advanced search: Reporte Impuestos Nacionales'(browser, P1, P2, P3) {
    console.log(P1, P2, P3)
    const clickPdf = 'a[href="/images/ASFI/DOCS/OPORTUNIDADES_EMPLEO/2018/Convocatoria_012018.pdf"]';

    const table = '.item-page > div > table > tbody > tr > td';
    // const mainQuery = 'Elon Musk';

    // const mainQueryInputSelector = 'input[name="as_q"]';
    // const languageDropdownOpenerSelector = '#lr_button';

    // const submitButtonSelector = '.jfk-button[type="submit"]';
    let ci = process.env.npm_config_myVar;
    let password = process.env.npm_config_password;
    console.log('ci', ci, password);
    // console.log({ myVar: process.env.npm_config_myVar });

    browser
      .url('https://www.uv.es/lonjedo/esoProblemas/unidad3ecuaciones.pdf')
      // .url('https://www.asfi.gob.bo/index.php/transparencia/convocatorias-personal.html')
      // .click(clickPdf)
      .pause(8000)
      .status()
      .end(test());

    // function resolveRobotizacion() {
    //   return new Promise(resolve => {

    //     // Excel
    //     resolve({
    //       data: 'correcto'
    //     });
    //   });
    // }

    function test() {
      // setTimeout(() => {
      //   fs.rename('./files/Convocatoria_012018.pdf', './files/cambio.pdf', (err) => {
      //     if (err) throw err;
      //     console.log('Nombre Editado Satisfactoriamente');
      //   });
      // }, 8000);
      console.log('test');
    }

    // function cambiarNombreArchivo() {
    //   return new Promise(resolve => {
    //     resolve({
    //       archivo: 'correcto'
    //     });
    //   });
    // }

    // async function f1() {
    //   var x = await resolveRobotizacion();
    //   console.log(x); // 10
    // }
    // f1();

    // async function f2() {
    //   var y = await cambiarNombreArchivo();
    //   console.log(y); // 10
    // }
    // f2();

    // .saveScreenshot('tests_output/automatizacion.png');





  }
}