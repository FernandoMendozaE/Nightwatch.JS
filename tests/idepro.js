const config = require('../utilitarios/configData')

module.exports = {
  "@tags": ["idepro"],
  "CIC advanced search: Reporte"(browser) {

    const mainUser = process.env.npm_config_varUser;
    const mainPassword = process.env.npm_config_varPassword;

    const mainQueryInputUser = 'input[name="ctl00$IFMainContent$txtLogin"]';
    const mainQueryInputPassword =
      'input[name="ctl00$IFMainContent$txtPasswd"]';
    const submitButtonSelector = '.btnAceptar[type="submit"]';
    const submitButtonConsultaCod = 'a[href="ConsultasDefault.aspx?opPag=1"]';

    const mainCodIdentidad = process.env.npm_config_varclienteCI; 

    const mainQueryInputCodIdentidad =
      'input[name="ctl00$ctl00$IFMainContent$DefaultContent$txtIdentificacion"]';
    const submitButtonConsultar =
      '#IFMainContent_DefaultContent_pnlConsultaIndividual input[type="submit"]';

    // Clicks
    const checkOp1 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXMainTable > tbody > tr:nth-child(2) > td > span';
    const ci_checkOp1 =
      "#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow0 >td:nth-child(4)";

    const checkOp2 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXMainTable > tbody > tr:nth-child(3) > td > span';
    const ci_checkOp2 =
      "#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow1 >td:nth-child(4)";

    const checkOp3 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXMainTable > tbody > tr:nth-child(4) > td > span';
    const ci_checkOp3 =
      "#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow2 >td:nth-child(4)";

    const checkOp4 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXMainTable > tbody > tr:nth-child(5) > td > span';

    const ci_checkOp4 =
      "#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow3 >td:nth-child(4)";

    // button
    const consultaCheck =
      '#IFMainContent_DefaultContent_pnlDetalleRepetidos input[type="submit"]';
    const resultado =
      '#IFMainContent_DefaultContent_pnlResultadosConsulta input[type="submit"]';

    browser
      .url("http://apps.supernet.bo/IC/Autentication.aspx")
      .setValue(mainQueryInputUser, mainUser)
      .setValue(mainQueryInputPassword, mainPassword)
      .click(submitButtonSelector)
      .click(submitButtonConsultaCod)
      .setValue(mainQueryInputCodIdentidad, mainCodIdentidad)
      .click(submitButtonConsultar)
      .pause(`${config.time}`);
    browser.element("css selector", checkOp1, function(result) {
      if (result.status != -1) {
        browser.element("css selector", checkOp2, function(result) {
          if (result.status != -1) {
            browser.element("css selector", checkOp3, function(result) {
              if (result.status != -1) {
                browser.element("css selector", checkOp4, function(result) {
                  if (result.status != -1) {
                    browser.pause(2000).getText(ci_checkOp1, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click({
                          selector: checkOp1,
                          timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                        });
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp2, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click({
                          selector: checkOp2,
                          timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                        });
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp3, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click({
                          selector: checkOp3,
                          timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                        });
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp4, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click({
                          selector: checkOp4,
                          timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                        });
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser
                      .pause(1000)
                      .click(consultaCheck)
                      .pause(8000)
                      .click(resultado)
                      .pause(8000)

                      .end();
                    //Element exists, do something
                  } else {
                    browser.pause(2000).getText(ci_checkOp1, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click({
                          selector: checkOp1,
                          timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                        });
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp2, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click({
                          selector: checkOp2,
                          timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                        });
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp3, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click({
                          selector: checkOp3,
                          timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                        });
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser
                      .pause(1000)
                      .click(consultaCheck)
                      .pause(8000)
                      .click(resultado)
                      .pause(8000)

                      .end();
                    //Element does not exist, do something else
                  }
                });
              } else {
                browser.pause(2000).getText(ci_checkOp1, function(result) {
                  console.log("object", result.value);
                  if (result.value === mainCodIdentidad) {
                    console.log("Correcto!");
                    browser.click({
                      selector: checkOp1,
                      timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                    });
                  } else {
                    console.log("Incorrecto!");
                  }
                });
                browser.pause(2000).getText(ci_checkOp2, function(result) {
                  console.log("object", result.value);
                  if (result.value === mainCodIdentidad) {
                    console.log("Correcto!");
                    browser.click({
                      selector: checkOp2,
                      timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                    });
                  } else {
                    console.log("Incorrecto!");
                  }
                });
                browser
                  .pause(1000)
                  .click(consultaCheck)
                  .pause(8000)
                  .click(resultado)
                  .pause(8000)

                  .end();
                //Element does not exist, do something else
              }
            });
          } else {
            browser.pause(20000).getText(ci_checkOp1, function(result) {
              console.log("object", result.value);
              if (result.value === mainCodIdentidad) {
                console.log("Correcto!");
                browser.click({
                  selector: checkOp1,
                  timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
                });
              } else {
                console.log("Incorrecto!");
                browser
                  .click(consultaCheck)
                  .pause(1000)
                  .click(resultado)
                  .pause(2000)
                  .end();
              }
            });
            //Element does not exist, do something else
          }
        });
        //Element exists, do something
      } else {
        browser
          .pause(5000)
          .end();
        //Element does not exist, do something else
      }
    });
  }
};
