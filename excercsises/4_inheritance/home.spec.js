var homePage = require(browser.__pagesDir + '/home');

describe('How to do it in JS homepage', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should have Agile & Automation Days | Conference & Workshops title', function(){
		expect(homePage.getTitle()).toEqual("Agile & Automation Days | Conference & Workshops");
	});

});
