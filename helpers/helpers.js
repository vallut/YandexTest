const helpers = {
    async waitForVisible(element) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.visibilityOf(element), 20000);
    },
};

module.exports = helpers;
