module.exports = {
  '@tags': ['impuestos'],
  'Google advanced search: Reporte Impuestos Nacionales'(browser) {

    // Excel
    // const clickExcel = 'a[href="/ckeditor/plugins/imageuploader/uploads/27052a412f.xlsx"]';
    // Pdf
    const clickPdf = 'a[href="/pdf/ACTA-RENDICION-DE-CUENTAS-FINAL-2014.pdf"]';

    // const mainQuery = 'Elon Musk';

    // const mainQueryInputSelector = 'input[name="as_q"]';
    // const languageDropdownOpenerSelector = '#lr_button';
    // const languageDropdownValuesSelector = '.goog-menuitem[value="lang_it"]';

    // const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
    // const lastUpdateDropdownValuesSelector = '.goog-menuitem[value="m"]';

    // const submitButtonSelector = '.jfk-button[type="submit"]';

    browser
      // .url('https://www.impuestos.gob.bo/pag/Portal_Oficina_Virtual') //Excel
      // .sclick(clickExcel) // Excel
      .url('https://www.impuestos.gob.bo/page/61') //Pdf
      .click(clickPdf) // Excel

    // .url('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp'); //Pdf
    // .url('https://www.uv.es/lonjedo/esoProblemas/unidad3ecuaciones.pdf'); //Pdf
    // .url('http://www.bib.uia.mx/tesis/pdf/014828/014828.pdf'); //Pdf
    // .click(clickPdf) // Excel


    // .setValue(mainQueryInputSelector, mainQuery)
    // .pause(800000)
    // .click(languageDropdownValuesSelector)
    // .click(lastUpdateDropdownOpenerSelector)
    // .click(lastUpdateDropdownValuesSelector)
    // .click(submitButtonSelector)
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