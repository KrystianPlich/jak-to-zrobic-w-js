var afternoonPage = require(browser.__pagesDir + '/afternoons');
var speakers = require(browser.__dataDir + '/speakers');

describe('How to do it in JS afternoonPage', function() {

	beforeEach(function () {
		afternoonPage.get();
	});

	it('should have Agile & Automation Afternoons | Agile & Automation Days title', function(){
		expect(afternoonPage.getTitle()).toEqual("Agile & Automation Afternoons | Agile & Automation Days");
	});

	it('should contain correct speakers', function(){
		expect(afternoonPage.getSpeakers()).toEqual(speakers.data);
	});

});