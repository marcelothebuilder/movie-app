var Search = function() {
    var self = this;
    self.get = function() {
        browser.get('/');

        browser.waitForAngular();
    };

    self.getSubmitButton = function() {
        return element(by.buttonText('Go!'));
    };

    self.submit = function() {
        self.getSubmitButton().click();
        browser.waitForAngular();
    };

    self.getResults = function() {
        return element.all(by.repeater('result in vm.results'));
    };

    self.getSearchInput = function() {
        return element(by.model('vm.query'));
    };
};

describe('Results page', function() {
    var page;

    beforeEach(function() {
        page = new Search();
    });

    describe('at home page', function() {
        beforeEach(function() {
            page.get();
        });

        it('should keep the Go! button disabled if the search field is empty', function() {
            expect(page.getSubmitButton().getAttribute('disabled')).toBeTruthy();
        });

        describe('when searching for the word Star', function() {
            beforeEach(function() {
                page.getSearchInput().sendKeys('Star');
            });

            describe('and clicking the Go button', function() {
                beforeEach(function() {
                    page.submit();
                });

                it('should redirect to results', function() {
                    expect(browser.getCurrentUrl()).toMatch('result');
                });

                it('should show 10 results', function() {
                    var results = page.getResults();
                    expect(results.count()).toBe(10);
                });

                it('should show a header with a title about the first movie', function() {
                    var firstMovie = page.getResults().first();
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
