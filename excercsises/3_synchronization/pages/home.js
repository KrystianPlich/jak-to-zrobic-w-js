const { browser, element } = require("protractor");

var EC = protractor.ExpectedConditions;

var HomePage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a'));
  this.dropdownOpen = element(by.css('li.dropdown.open'));
  this.rightButton = element(by.css('a.right'));
  this.nextCarouselItem = element(by.css('div.next.left'));

  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickMenuAtIdx = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function(idx) {
    return this.menuItems.get(idx);
  };
  
  this.isDropdownOpen = function() {
    this.clickMenuAtIdx(1);
    return EC.presenceOf(this.dropdownOpen);
  };

  this.clickRightCarousel = function() {
    this.rightButton.click();
  };

  this.getNextCarouselHeader = function() {
    this.rightButton.click();
    browser.wait(EC.presenceOf(this.nextCarouselItem), 3000);
    browser.wait(EC.stalenessOf(this.nextCarouselItem), 2000)
    return element(by.css('.active h1'));
  }
};

module.exports = new HomePage();
