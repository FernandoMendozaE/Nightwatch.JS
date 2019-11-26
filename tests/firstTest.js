module.exports = {
  'My firt test case'(browser) {
    browser
      .url('https://news.ycombinator.com/')
      .waitForElementVisible('.storylink')
      .assert.containsText(".storylink", "Pricing niche products: Why sell a mechanical keyboard kit for $1,668?");
  }
}