const { element } = require('protractor');
var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		const expectedHeader = 'Example Headline 2';
		expect(homePage.getNextCarouselHeader().getText()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', function(){
		expect(homePage.isDropdownOpen()).toBeTruthy;
	});

});
