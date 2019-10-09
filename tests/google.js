module.exports = {
  '@tags': ['google'],
  'Google advanced search: Elon Musk'(browser) {
    const mainQuery = 'Elon Musk';

    const mainQueryInputSelector = 'input[name="as_q"]';
    const languageDropdownOpenerSelector = '#lr_button';
    const languageDropdownValuesSelector = '.goog-menuitem[value="lang_it"]';

    const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
    const lastUpdateDropdownValuesSelector = '.goog-menuitem[value="m"]';

    const submitButtonSelector = '.jfk-button[type="submit"]';

    browser
      .url('https://www.google.com/advanced_search')
      .setValue(mainQueryInputSelector, mainQuery)
      .click(languageDropdownOpenerSelector)
      .click(languageDropdownValuesSelector)
      .click(lastUpdateDropdownOpenerSelector)
      .click(lastUpdateDropdownValuesSelector)
      .click(submitButtonSelector)
      .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
      .assert.urlContains('lr=lang_it', 'Params: Languaje is Italian')
      .assert.urlContains('as_qdr=m', 'Params: Time period is last month')
    // browser.expect.element(resultsPageQuerySelector).to.be.visible;
    browser.saveScreenshot('tests_output/google.png')
  }
}