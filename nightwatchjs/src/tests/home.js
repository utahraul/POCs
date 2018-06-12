module.exports = {
  "Demo test Google": function(browser) {
    var homePage = browser.page.home_page();
    var requestDemoPage = browser.page.request_demo_page();

    homePage
      .navigate()
      .waitForElementVisible("@here", 5000)
      .click("@requestADemo");

    browser.windowHandles(function(result) {
      browser.switchWindow(result.value[1]);
    });

    requestDemoPage
      .waitForElementVisible("@here", 5000)
      .assert.title("Returnly Demo | Turn Returns Into Repurchases")
      .fillRequestDemoForm()
      .sendRequestDemoForm();

    browser
      .waitForElementVisible('H1', 5000)
      .assert.containsText('H1', 'Thank you!')
      .end();
  }
};
