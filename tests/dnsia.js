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
    const clickRecordAcademico = 'a[href="../../packages/dnsia/3.04.php"]';
    const clickGenerarPDF = '#extra a[href="../../packages/dnsia/3.04.php?id_estudiante=11777&print=1"]';
    const clickcerrarSesion = '#navPanel a[href="../../sac/security/desconectar.php?lang=es"]';

    browser
      .url('https://www.asfi.gob.bo/')
      // .url('https://dnsia.informatica.edu.bo/')
      // .pause(8000)
      // .setValue(mainLoginInput, mainLogin)
      // // .pause(8000)
      // .setValue(mainPasswordInput, mainPassword)
      // .click(submitButton)
      // // .pause(200)
      // .click(clickGestionarPerido)
      // // .pause(200)
      // .click(clickRecordAcademico)
      // // .pause(200)
      // .click(clickGenerarPDF)
      // .pause(10000)
      // .click(clickcerrarSesion)

      // .saveScreenshot('tests_output/dnsia.png')
      .end();
  }
} 
