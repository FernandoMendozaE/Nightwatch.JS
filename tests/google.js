var download = require("download-pdf");

module.exports = {
  '@tags': ['google'],
  'Google advanced search: Elon Musk'(browser) {
    const mainQuery = 'asfi.pdf';

    const mainQueryInputSelector = 'input[name="as_q"]';
    const languageDropdownOpenerSelector = '#lr_button';
    const languageDropdownValuesSelector = '.goog-menuitem[value="lang_it"]';

    const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
    const lastUpdateDropdownValuesSelector = '.goog-menuitem[value="m"]';

    const submitButtonSelector = '.jfk-button[type="submit"]';

    const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
    const resultsPageLanguageSelector = '[aria-label="Buscar solo páginas en italiano"]';
    const resultsPageUpdateSelector = '[aria-label=" Último mes"]';

    const submitButtonEnlace = 'a[href="http://www.archiviodistato.firenze.it/asfi/fileadmin/risorse/allegati_eventi_del_mese/2019_10_eventi_del%20mese.pdf"]';

    browser
      .url('https://www.google.com/advanced_search')
      .setValue(mainQueryInputSelector, mainQuery)
      .click(languageDropdownOpenerSelector)
      .click(languageDropdownValuesSelector)
      .click(lastUpdateDropdownOpenerSelector)
      .click(lastUpdateDropdownValuesSelector)
      .click(submitButtonSelector)
      // .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
      // .assert.urlContains('lr=lang_it', 'Params: Languaje is Italian')
      // .assert.urlContains('as_qdr=m', 'Params: Time period is last month')
      .click(submitButtonEnlace)

    var pdf = "https://www.asfi.gob.bo/images/ASFI/DOCS/OPORTUNIDADES_EMPLEO/2018/Requerimiento_de_personal_02-2018.pdf";

    var options = {
      directory: "./pdfs/ebola/",
      filename: "2014-11-17.pdf"
    };

    download(pdf, options, function (err) {
      if (err) throw err;
      console.log("meow");
    });


    browser.saveScreenshot('tests_output/google.png');
    // browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
    // // browser.assert.containsText(resultsPageLanguageSelector, 'Buscar solo páginas en italiano', 'UI: Language is set to Itilian');
    // browser.assert.containsText(resultsPageUpdateSelector, 'Último mes', 'UI: Last update is set to Month');
  }
};
