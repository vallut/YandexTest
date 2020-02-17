const helpers = require('../helpers/helpers.js');

class LanguageChange {
    //selectedLanguage = "Interface language"
    constructor() {
        this.languageSelector = by.css('[class="button select__button button_theme_normal button_arrow_down button_size_m i-bem button_js_inited"]')
        //this.eanglishOption = by.css('id="uniq15815945836486"');
        //this.eanglishOption = by.css('[value="en"]');
        this.eanglishOption = by.css('div[class="select__list"]>div:nth-child(6) span');
        //this.eanglishOption = by.cssContainingText('.select__option', 'English')
        this.languageField = by.css('[class="options__header"]');
       // this.languageField = by.css('[data-statlog="tabs.geo"]');
        this.saveButton =by.css('[type="submit"]')
        this.selectedLanguage = "Interface language";
    }

    async choseEanglish() {
        const elm = await element(this.languageSelector);
        await helpers.waitForVisible(elm);
        await elm.click();
        const elm2 = await element(this.eanglishOption);
        await helpers.waitForVisible(elm2);
       //const elm2 = await browser.executeScript(`arguments[5].selectedIndex = 1; arguments[0].dispatchEvent(new Event("change"));`, await ${'select'});
        await elm2.click();
        const button = await element(this.saveButton);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async checkLanguage() {
        const elm = await element(this.languageField);
        await helpers.waitForVisible(elm);
        const languageFieldValue = await elm.getText();
        if(languageFieldValue === this.selectedLanguage ) {
            return true;
        } else {
            throw new Error('Incorrect language');
        }
    }
}

module.exports = LanguageChange;
