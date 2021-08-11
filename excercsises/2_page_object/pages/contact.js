var ContactPage = function() {

    this.headings = element.all(by.css('h3'));
  
    this.get = function() {
      browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
    };
  
    this.getTitle = function() {
      return browser.driver.getTitle();
    };
    
    this.getInTouch = function() {
        return this.headings.get(0);
    }
    this.getAdress = function() {
        return this.headings.get(1);
    }

  };
  
  module.exports = new ContactPage();