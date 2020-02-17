const helpers = require('../helpers/helpers.js');

class SignInMail {
    constructor() {
        this.anotherAccount = by.css('class="control link link_theme_normal passp-auth-header-link passp-auth-header-link_visible"');
        this.accountField = by.id("passp-field-login");
        //this.signInLogin = by.className('.control.passp-form-button');
        this.signInLogin = by.className("control button2 button2_view_classic button2_size_l button2_theme_action button2_width_max button2_type_submit passp-form-button");
           //className = by.css(".control .passp-form-button")
        this.passwordField = by.id("passp-field-passwd");
        this.signInPass = by.className('control button2 button2_view_classic button2_size_l button2_theme_action button2_width_max button2_type_submit passp-form-button');
        this.incorrectLoginField = by.className('passp-form-field__error');
        this.incorrectPasswordField = by.className('passp-form-field__error');
        //let incorrectLoginMessage = "Такой логин не подойдет";
        //let incorrectPasswordMessage = "Неверный пароль";
   
    }


    async inputLogin(path) {
        const elm = await element(this.accountField);
        const button = await element(this.signInLogin);
        await helpers.waitForVisible(elm);
        await elm.clear();
        await elm.sendKeys(path);
        browser.sleep(3000);

        await button.click();
    }
    async inputPassword(path) {
        const elm = await element(this.passwordField);
        const button = await element(this.signInPass);
        await helpers.waitForVisible(elm);
        await elm.clear();
        await elm.sendKeys(path);
        await button.click();
    }
    async checkIncorrectLogin(incorrectLoginMessage) {
        browser.sleep(3000);
        const elm = await element(this.incorrectLoginField);
        await helpers.waitForVisible(elm);
        const incorrectLoginField = await elm.getText();
        if(incorrectLoginMessage === incorrectLoginField) {
            return true;
        } else {
            throw new Error('Incorrect check');
        }
    }
    async checkIncorrectPassword(incorrectPasswordMessage) {
        browser.sleep(3000);
        const elm = await element(this.incorrectPasswordField);
        await helpers.waitForVisible(elm);
        const incorrectPasswordField = await elm.getText();
        if(incorrectPasswordMessage === incorrectPasswordField) {
            return true;
        } else {
            throw new Error('Incorrect check');
        }
    }
}

module.exports = SignInMail;
