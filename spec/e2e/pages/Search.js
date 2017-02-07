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

module.exports = Search;
