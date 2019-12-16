module.exports = {
  "@tags": ["idepro"],
  "CIC advanced search: Reporte"(browser) {

    // let user = process.env.npm_config_varUser
    // let password = process.env.npm_config_varPassword
    // let clienteCI = process.env.npm_config_varclienteCI
    // console.log('data', user, password, clienteCI)


    const mainUser = process.env.npm_config_varUser;
    const mainPassword = process.env.npm_config_varPassword;

    const mainQueryInputUser = 'input[name="ctl00$IFMainContent$txtLogin"]';
    const mainQueryInputPassword =
      'input[name="ctl00$IFMainContent$txtPasswd"]';
    const submitButtonSelector = '.btnAceptar[type="submit"]';
    const submitButtonConsultaCod = 'a[href="ConsultasDefault.aspx?opPag=1"]';

    const mainCodIdentidad = process.env.npm_config_varclienteCI; 
    // const mainCodIdentidad = "2487231LP"; //SinCheck
    // const mainCodIdentidad = "25856301DLP"; //Check1 Correcto
    // const mainCodIdentidad = "2585630LP"; //Check1

    // const mainCodIdentidad = '2154399LP'; //Check2
    // const mainCodIdentidad = '6983244LP'; //Check3
    // const mainCodIdentidad = "2349639LP"; //Check4
    // const mainCodIdentidad = "6111211LP"; //Desconocido

    const mainQueryInputCodIdentidad =
      'input[name="ctl00$ctl00$IFMainContent$DefaultContent$txtIdentificacion"]';
    const submitButtonConsultar =
      '#IFMainContent_DefaultContent_pnlConsultaIndividual input[type="submit"]';

    // Clicks
    const checkOp1 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow0 input[id="IFMainContent_DefaultContent_devgvMismosCI_DXSelBtn0"]';
    const ci_checkOp1 =
      "#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow0 >td:nth-child(4)";

    const checkOp2 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow1 input[id="IFMainContent_DefaultContent_devgvMismosCI_DXSelBtn1"]';
    const ci_checkOp2 =
      "#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow1 >td:nth-child(4)";

    const checkOp3 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow2 input[id="IFMainContent_DefaultContent_devgvMismosCI_DXSelBtn2"]';
    const ci_checkOp3 =
      "#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow2 >td:nth-child(4)";

    const checkOp4 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow3 input[id="IFMainContent_DefaultContent_devgvMismosCI_DXSelBtn3"]';

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
      // .pause(1000)

      .click(submitButtonConsultar)

      // checks
      .pause(2000);
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
                        browser.click(checkOp1).pause(1000);
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp2, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click(checkOp2).pause(1000);
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp3, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click(checkOp3).pause(1000);
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp4, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click(checkOp4);
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
                        browser.click(checkOp1).pause(1000);
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp2, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click(checkOp2).pause(1000);
                      } else {
                        console.log("Incorrecto!");
                      }
                    });
                    browser.pause(2000).getText(ci_checkOp3, function(result) {
                      console.log("object", result.value);
                      if (result.value === mainCodIdentidad) {
                        console.log("Correcto!");
                        browser.click(checkOp3);
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
                    browser.click(checkOp1).pause(1000);
                  } else {
                    console.log("Incorrecto!");
                  }
                });
                browser.pause(2000).getText(ci_checkOp2, function(result) {
                  console.log("object", result.value);
                  if (result.value === mainCodIdentidad) {
                    console.log("Correcto!");
                    browser.click(checkOp2);
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
                browser
                  .click(checkOp1)
                  .pause(1000)
                  .click(consultaCheck)
                  .pause(1000)
                  .click(resultado)
                  .pause(2000)
                  .end();
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
          // .pause(8000)
          // .click(resultado)
          .pause(2000)
          .end();
        //Element does not exist, do something else
      }
    });
  }
};
