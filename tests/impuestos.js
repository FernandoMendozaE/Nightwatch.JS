module.exports = {
  '@tags': ['impuestos'],
  'Google advanced search: Reporte Impuestos Nacionales'(browser) {

    const clickPdf = 'a[href="/images/ASFI/DOCS/OPORTUNIDADES_EMPLEO/2018/Convocatoria_012018.pdf"]';

    const table = '.item-page > div > table > tbody > tr > td';
    // const mainQuery = 'Elon Musk';

    // const mainQueryInputSelector = 'input[name="as_q"]';
    // const languageDropdownOpenerSelector = '#lr_button';

    // const submitButtonSelector = '.jfk-button[type="submit"]';

    browser
      .url('https://www.asfi.gob.bo/index.php/transparencia/convocatorias-personal.html')
      .click(clickPdf) // Excel

      .getText(table, function (result) {
        console.log('object', result)
      });

    // .saveScreenshot('tests_output/automatizacion.png');

    // for (let i = 0; i < 15; i++) {
    //   try {
    //     browser.getText({
    //       selector: '#aside ul li a',
    //       index: i
    //     }, function (result) {
    //       if (result.status != -1) {
    //         console.log('getText result', result);
    //         // browser
    //         // .pause(200000)
    //         // .end();
    //         //Element exists, do something
    //       } else {
    //         browser
    //           // .pause(200000)
    //           .end();
    //       }
    //     })
    //   } catch (error) {
    //     console.log('error');
    //   }
    // }
    browser
      .pause(8000)
      .end();

    // browser.getText('css selector', '#aside ul li', function (result) {
    // console.log('getText result', result.value);
    // browser.pause(800000);
    // });
    // browser.expect.element('#headingText').text.to.equal('Crear tu cuenta de Google');

  }
}