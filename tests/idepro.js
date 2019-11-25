module.exports = {
  "@tags": ["idepro"],
  "CIC advanced search: Reporte"(browser) {
    const mainUser = "cmontesinos@idepro.org";
    const mainPassword = "SF31hcxJ";

    const mainQueryInputUser = 'input[name="ctl00$IFMainContent$txtLogin"]';
    const mainQueryInputPassword =
      'input[name="ctl00$IFMainContent$txtPasswd"]';
    const submitButtonSelector = '.btnAceptar[type="submit"]';
    const submitButtonConsultaCod = 'a[href="ConsultasDefault.aspx?opPag=1"]';

    const mainCodIdentidad = '2487231LP'; //SinCheck
    // const mainCodIdentidad = '2585630LP'; //Check1
    // const mainCodIdentidad = '2154399LP'; //Check2
    // const mainCodIdentidad = '6983244LP'; //Check3
    // const mainCodIdentidad = '2349639LP'; //Check4
    // const mainCodIdentidad = "6111211LP"; //Desconocido

    const mainQueryInputCodIdentidad =
      'input[name="ctl00$ctl00$IFMainContent$DefaultContent$txtIdentificacion"]';
    const submitButtonConsultar =
      '#IFMainContent_DefaultContent_pnlConsultaIndividual input[type="submit"]';

    // Clicks
    const checkOp1 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow0 input[id="IFMainContent_DefaultContent_devgvMismosCI_DXSelBtn0"]';
    const checkOp2 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow1 input[id="IFMainContent_DefaultContent_devgvMismosCI_DXSelBtn1"]';
    const checkOp3 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow2 input[id="IFMainContent_DefaultContent_devgvMismosCI_DXSelBtn2"]';
    const checkOp4 =
      '#IFMainContent_DefaultContent_devgvMismosCI_DXDataRow3 input[id="IFMainContent_DefaultContent_devgvMismosCI_DXSelBtn3"]';

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
                    browser
                      .pause(200000)
                      // .click(checkOp1)
                      // .pause(1000)
                      // .click(checkOp2)
                      // .pause(1000)
                      // .click(checkOp3)
                      // .pause(1000)
                      // .click(checkOp4)
                      // .pause(1000)
                      // .click(consultaCheck)
                      // .pause(2000)
                      // .click(resultado)
                      // .pause(18000)
                      .end();
                    //Element exists, do something
                  } else {
                    browser
                      .pause(2000)
                      .click(checkOp1)
                      .pause(1000)
                      .click(checkOp2)
                      .pause(1000)
                      .click(checkOp3)
                      .pause(1000)
                      .click(consultaCheck)
                      .pause(2000)
                      .click(resultado)
                      .pause(200000)
                      .end();
                    //Element does not exist, do something else
                  }
                });
              } else {
                browser
                  .pause(1000)
                  .click(checkOp1)
                  .pause(1000)
                  .click(checkOp2)
                  .pause(1000)
                  .click(consultaCheck)
                  .pause(1000)
                  .click(resultado)
                  .pause(200000)
                  .end();
                //Element does not exist, do something else
              }
            });
          } else {
            browser
              .pause(20000)
              .click(checkOp1)
              .pause(1000)
              .click(consultaCheck)
              .pause(1000)
              .click(resultado)
              .pause(200000)
              .end();
            //Element does not exist, do something else
          }
        });
        //Element exists, do something
      } else {
        browser
          // .pause(8000)
          .click(resultado)
          // .pause(200000)
          .end();
        //Element does not exist, do something else
      }
    });
  }
};
