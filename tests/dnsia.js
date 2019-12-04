module.exports = {
  '@tags': ['dnsia'],
  'Google advanced search: Usuario sistema DNSIA'(browser) {

    // Data post
    let ci = process.env.npm_config_varCi;
    let password = process.env.npm_config_varPassword;
    console.log('data', ci, password);


    const mainLogin = process.env.npm_config_varCi;
    const mainLoginInput = 'input[name="login"]';

    const mainPassword = process.env.npm_config_varPassword;
    const mainPasswordInput = 'input[name="password"]';

    const submitButton = '.button[type="submit"]';

    const clickGestionarPerido = '#nav a[href="./packages/dnsia/ciclo_pa.php?lang=es"]';
    const clickRecordAcademico = 'a[href="../../packages/dnsia/3.05.php"]';
    const clickGenerarPDF = '#extra > ul:nth-child(2) > li > a';
    // const clickcerrarSesion = '#navPanel nav a[href="../../sac/security/desconectar.php?lang=es"]';

    browser
      // .url('http://jornadasciberseguridad.riasc.unileon.es/archivos/ejemplo_esp.pdf')
      .url('https://dnsia.informatica.edu.bo/')
      .pause(2000)
      .setValue(mainLoginInput, mainLogin)
      .pause(2000)
      .setValue(mainPasswordInput, mainPassword)
      .click(submitButton)
      .pause(1000)
      .click(clickGestionarPerido)
      .pause(1000)
      .click(clickRecordAcademico)
      .pause(2000)
      .click(clickGenerarPDF)
      .pause(3000)
      // .click(clickcerrarSesion)
      // .pause(1000)
      // .saveScreenshot('tests_output/dnsia.png')
      .end();
  }
} 
