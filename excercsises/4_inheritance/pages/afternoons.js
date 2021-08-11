const { element } = require('protractor');
var Page = require('./page');

var Afternoons = function() {

    Page.call(this);

    var self = this;

    this.menuItems = element.all(by.css('ul.nav > li > a')); 

    this.get = function() {
	this.load('/afternoons/');    
    };

    this.clickMenuAtIdx = function(idx) {
        this.menuItems.get(idx).click();
    };

    this.getMenuTextAtIdx = function(idx) {
        return this.menuItems.get(idx);
    };
    
    this.getSpeakers = function() {
        return element.all(by.css('figcaption a')).map(function(elem, index) {
            return {
                index: index,
                name: elem.getAttribute('title')
            }
        });
    };
};

Afternoons.prototype = Object.create(Page.prototype);
Afternoons.prototype.constructor = Afternoons;

module.exports = new Afternoons();