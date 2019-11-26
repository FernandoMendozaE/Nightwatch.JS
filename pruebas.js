module.exports = {
  '@tags': ['google'],
  'Google advanced search: Elon Musk'(browser) {
    const mainLogin = 'admin';
    const mainLoginInput = '.fuente-principal[type="texto"]';

    const mainPassword = 'admin4632';
    const mainPasswordInput = '.fuente-principal[type="password"]';

    const submitButton = '.boton[type="submit"]';

    // const mainLogin = '9189645';
    // const mainLoginInput = 'input[name="login"]';

    // const mainPassword = 'Htmldivertido';
    // const mainPasswordInput = 'input[name="password"]';

    // const submitButton = '.button[type="submit"]';

    // const languageDropdownOpenerSelector = '#lr_button';
    // const languageDropdownValuesSelector = '.goog-menuitem[value="lang_it"]';

    // const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
    // const lastUpdateDropdownValuesSelector = '.goog-menuitem[value="m"]';

    // const submitButtonSelector = '.jfk-button[type="submit"]';

    browser
      .url('http://192.169.154.129:4200/#/')
      .setValue(mainLoginInput, mainLogin)
      .setValue(mainPasswordInput, mainPassword)
      .click(submitButton)
      // .click(languageDropdownOpenerSelector)
      // .click(languageDropdownValuesSelector)
      // .click(lastUpdateDropdownOpenerSelector)
      // .click(lastUpdateDropdownValuesSelector)
      // .click(submitButtonSelector)
      // .saveScreenshot('tests_output/dnsia.png')
      .saveScreenshot('tests_output/t-organiza.png')
  }
}