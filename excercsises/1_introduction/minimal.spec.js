describe('Protractor workshop app', function() {

	// beforeEach(function () {
	//
	// });

	it('should have home page with title Protractor workshop | Home', function(){
		browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
		var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});

	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', function(){		
		var footerCopyright = element(by.xpath('//footer/div/div'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(footerCopyright.getText()).toContain(expectedHTML)
	});
	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */

	it('should have "Example headline 1" carousel item after entering site', function(){	
		var firstActiveItemTagText = element(by.css(' .active.item  .carousel-caption  h1'));
		var expectedHeadline = "Example Headline 1";
		expect(firstActiveItemTagText.getText()).toContain(expectedHeadline);
	});
	
	it('should have correct feature header', function(){
		var firstActiveItemTagText = element(by.className("span12 cnt-title")).element(by.css('h1'));
		var expectedElementText = "At vero eos et accusamus et iusto odio dignissimos"
		expect(firstActiveItemTagText.getText()).toEqual(expectedElementText);
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how get function can be used
	 */
	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages',function(){
		var expectedItemsText = ["Home", "About", "Services", "Blog", "Contact"]
		element.all(by.css('ul.nav > li > a')).then(function(items) {
			expect(items.length).toBe(5);
			items.forEach(function (item, i) {
				expect(item.getText()).toContain(expectedItemsText[i])
				expect(item.getAttribute('href'))
			})
		});
	});

	 /**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how map function can be used to verify content of multiple elements
	 */

	it('should have Feature A, Feature B, Feature C sections ...', function(){
		var features = element.all(by.xpath('//h2')).map(function(elm, index) {
			return {
				index: index,
				text: elm.getText(),
			}
		});
		var expectedAtr = [
			{index: 0, text: 'Feature A'},
			{index: 1, text: 'Feature B'},
			{index: 2, text: 'Feature C'}
		]
		expect(features).toEqual(expectedAtr);
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */	
	it('should route to "Blog" pages after selecting link',function(){
		element.all(by.css('ul.nav > li > a')).filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text === 'Blog';
			});
		}).click();
		let pageTitle = browser.driver.getTitle();
		expect(pageTitle).toBe('Protractor workshop | Blog');
	});

});
