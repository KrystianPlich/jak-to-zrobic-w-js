var Page = require('./page');

var Contact = function() {

  Page.call(this);

  var self = this;

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  this.get = function() {
    this.load('/contact-us/');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickMenuItemAt = function(idx) {
    this.menuItems.get(idx).click();
  };

};

Contact.prototype = Object.create(Page.prototype);
Contact.prototype.constructor = Contact;

module.exports = new Contact();
