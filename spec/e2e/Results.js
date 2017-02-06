describe('Results page', function() {
    describe('at home page', function() {
        beforeEach(function() {
            browser.get('http://localhost:3000/#!/');

            browser.waitForAngular();
        });

        it('should keep the Go! button disabled if the search field is empty', function() {
            expect(element(by.buttonText('Go!')).getAttribute('disabled')).toBeTruthy();
        });

        describe('when searching for the word Star', function() {
            beforeEach(function() {
                element(by.model('vm.query')).sendKeys('Star');
            });

            describe('and clicking the Go button', function() {
                beforeEach(function() {
                    element(by.buttonText('Go!')).click();

                    browser.waitForAngular();
                });

                it('should redirect to results', function() {
                    expect(browser.getCurrentUrl()).toMatch('result');
                });

                it('should show 10 results', function() {
                    var results = element.all(by.repeater('result in vm.results'));
                    expect(results.count()).toBe(10);
                });

                it('should show a header with a title about the first movie', function() {
                    var firstMovie = element.all(by.repeater('result in vm.results')).first();
                    expect(firstMovie.element(by.css('[uib-accordion-header]')).getText()).toMatch('Star Wars');
                });
            });

            describe("and waiting a few seconds", function() {
                it('should automatically redirect to the results', function() {
                    browser.sleep(3000);
                    expect(browser.getCurrentUrl()).toMatch(/results\?q=Star/);
                });
            });
        });
    });
});
