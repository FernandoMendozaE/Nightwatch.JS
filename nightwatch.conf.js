const gecko = require("geckodriver");
const selenium = require("selenium-server");
const chrome = require("chromedriver");
module.exports = (function (settings) {
  // console.log('Firefox Path:\r\n', gecko.path);
  settings.test_workers = false;
  // console.log('settings', settings.test_settings.default.desiredCapabilities.browserName)
  // console.log('settings', settings)
  // console.log('Dato', settings)
  // console.log('selenium', selenium)
  // console.log('gecko', gecko)
  // settings.test_settings.chrome.webdriver.server_path = chrome.path;
  // settings.test_settings.firefox.webdriver.server_path = gecko.path;
  return settings;
})(require("./nightwatch.json"));