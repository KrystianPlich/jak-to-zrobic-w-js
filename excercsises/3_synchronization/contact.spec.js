var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contactPage.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function(){
		contactPage.sendMessage('Test', 'sample@email.com', 'Content');
		expect(contactPage.getMessageSent().getText()).toEqual("Your message has been sent.")
	});
});
