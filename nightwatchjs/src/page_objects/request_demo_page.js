var requestDemoCommands = {
  fillRequestDemoForm: function() {
    this.waitForElementVisible("@firstName", 5000)
      .setValue("@firstName", "firstName")
      .setValue("@lastName", "lastName")
      .setValue("@workEmail", "workEmail@email.com")
      .setValue("@phoneNumber", "0039876876876")
      .setValue("@companyName", "companyName")
      .setValue("@jobTitle", "jobTitle")
      .selectDropDown('select[id^="ecomm_platform"]', 'option[value="Shopify"]')
      .selectDropDown(
        'select[id^="estimated_annual_sales"]',
        'option[value="<$1M"]'
      )
      .setValue("@message", "message")
      .api.pause(2000);
    return this;
  },

  selectDropDown: function(selector, value) {
    this.click(selector)
      .api.pause(1000)
      .click(value);
    return this;
  },

  sendRequestDemoForm: function(name, lastname, telephone, to) {
    this
    .click('@sendRequestForDemo');
    return this;
  }
};

module.exports = {
  url: function() {
    return this.api.launchUrl + "/demo";
  },
  elements: {
    here: 'div[id^="hs_form_target"]',
    firstName: "input[id^=firstname]",
    lastName: "input[id^=lastname]",
    workEmail: "input[id^=email]",
    phoneNumber: "input[id^=phone]",
    companyName: "input[id^=company]",
    jobTitle: "input[id^=jobtitle]",
    sendRequestForDemo: "input[type=submit]",
    message: "textarea[id^=message]"
  },
  commands: [requestDemoCommands]
};
