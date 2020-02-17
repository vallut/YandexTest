const helpers = require('../helpers/helpers.js');

class MainMail {
    constructor() {
        this.mailUserName = by.id(mail-User-Name);
        //this.mailUserName = by.id('recipient-1');
        this.signOutFromMailButton = by.css('[data-metric="Sign out of Yandex services"]');
    }

    async checkSigndeUser(signdUserName) {
        const elm = await element(this.mailUserName);
        await helpers.waitForVisible(elm);
        const getUserName = await elm.getText();
        if(getUserName === signdUserName) {
            return signdUserName;
        } else {
            throw new Error('Invalid User name');
        }
    }

    async signOutUser() {
        const elm = await element(this.mailUserName);
        await helpers.waitForVisible(elm);
        await elm.click();
        const elm2 = await element(this.signOutFromMailButton);
        await helpers.waitForVisible(elm);
        await elm2.click();
    }
}

module.exports = MainMail;
