module.exports = {
  '@tags': ['dnsia'],
  'Google advanced search: Usuario sistema DNSIA'(browser) {

    const mainLogin = '9192540';
    const mainLoginInput = 'input[name="login"]';

    const mainPassword = '9192540';
    const mainPasswordInput = 'input[name="password"]';

    const submitButton = '.button[type="submit"]';

    const clickGestionarPerido = '#nav a[href="./packages/dnsia/ciclo_pa.php?lang=es"]';
    const clickRecordAcademico = 'a[href="../../packages/dnsia/3.04.php"]';
    const clickGenerarPDF = '#extra a[href="../../packages/dnsia/3.04.php?id_estudiante=11777&print=1"]';

    browser
      .url('https://dnsia.informatica.edu.bo/')
      .setValue(mainLoginInput, mainLogin)
      .setValue(mainPasswordInput, mainPassword)
      .pause(200)
      .click(submitButton)
      .pause(200)
      .click(clickGestionarPerido)
      .pause(200)
      .click(clickRecordAcademico)
      .pause(200)
      .click(clickGenerarPDF)
      .pause(2000)
      // .saveScreenshot('tests_output/dnsia.png')
      .end();
  }
} 
