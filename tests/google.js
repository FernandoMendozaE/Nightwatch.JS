module.exports = {
  '@tags': ['google'],
  'Google advanced search: Elon Musk'(browser) {
    const mainQuery = 'Elon Musk';

    const mainQueryInputSelector = 'input[name="as_q"]';
    const languageDropdownOpenerSelector = 'a[href="/images/ASFI/DOCS/OPORTUNIDADES_EMPLEO/2018/Convocatoria_012018.pdf"]';
    // const languageDropdownValuesSelector = '.goog-menuitem[value="lang_it"]';

    // const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
    // const lastUpdateDropdownValuesSelector = '.goog-menuitem[value="m"]';

    // const submitButtonSelector = '.jfk-button[type="submit"]';

    // const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
    // const resultsPageLanguageSelector = '[aria-label="Buscar solo páginas en italiano"]';
    // const resultsPageUpdateSelector = '[aria-label=" Último mes"]';

    browser.url('https://www.asfi.gob.bo/index.php/transparencia/convocatorias-personal.html')
    // .setValue(mainQueryInputSelector, mainQuery)
    // .click(languageDropdownOpenerSelector)
    // .click(languageDropdownValuesSelector)
    // .click(lastUpdateDropdownOpenerSelector)
    // .click(lastUpdateDropdownValuesSelector)
    // .click(submitButtonSelector)
    // .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
    // .assert.urlContains('lr=lang_it', 'Params: Languaje is Italian')
    // .assert.urlContains('as_qdr=m', 'Params: Time period is last month')

    browser.saveScreenshot('tests_output/google.png ');
    // browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
    // // browser.assert.containsText(resultsPageLanguageSelector, 'Buscar solo páginas en italiano', 'UI: Language is set to Itilian');
    // browser.assert.containsText(resultsPageUpdateSelector, 'Último mes', 'UI: Last update is set to Month');
  }
}