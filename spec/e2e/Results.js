describe('Results page', function() {
    describe('at home page', function() {
        describe('when searching for the word Star', function() {
            beforeEach(function() {
                browser.get('http://localhost:3000/#!/');

                browser.waitForAngular();

                element(by.model('vm.query')).sendKeys('Star');

                element(by.css('.btn.btn-default')).click();

                browser.waitForAngular();
            });

            it('should redirect to results', function() {
                expect(browser.getCurrentUrl()).toMatch('result');
            });

            it('should show 10 results', function() {
                var results = element.all(by.repeater('result in vm.results'));
                expect(results.count()).toBe(10);
            });

            it('should show a header with a title about the first movie', function () {
                var firstMovie = element.all(by.repeater('result in vm.results')).first();
                expect(firstMovie.element(by.css('[uib-accordion-header]')).getText()).toMatch('Star Wars');
            });
        });
    });
});
