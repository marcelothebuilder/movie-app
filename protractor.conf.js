exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/e2e/**/*.js'],
    onPrepare: function() {
        browser.driver.manage().window().setPosition(0, 0);
        browser.driver.manage().window().setSize(1280, 720);
    },
    capabilities: {
         'browserName': 'chrome',
         'chromeOptions': { args: ['--test-type', 'show-fps-counter=true'] }
    }
};
