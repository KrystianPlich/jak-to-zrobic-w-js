const { element, browser } = require("protractor");
var EC = protractor.ExpectedConditions;

var Contact = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a'));
  this.messageSent = element(by.css('h4.alert.alert-success'));

  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickMenuItemAt = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.sendMessage = function(name, email, message) {
    element(by.css('input#name')).sendKeys(name);
    element(by.css('input#email')).sendKeys(email);
    element(by.css('textarea#content')).sendKeys(message);
    element(by.css('button.btn.test')).click();
  }

  this.getMessageSent = function() {
    browser.wait(EC.presenceOf(this.messageSent), 6000);
    return this.messageSent;
  }

};

module.exports = new Contact();
