const YandexMain = require('../pages/YandexMain');
const SignInMail = require('../pages/SignInMail');
const MainMail = require('../pages/MainMail');

const mainUrl = "https://yandex.by/";

describe('mailLogOut', function () {
    const yandexMain = new YandexMain();
    const signInMail = new SignInMail();
    const mainMail = new MainMail();
    let userName = "valentyn.lutsuk";
    let password = "cHBeqZwUaAw_7P3";
    let selector = '[data-statlog="notifications.mail.logout.domik.login.big"]';


    it('mail SignIn', async () => {
        await browser.get(mainUrl);
        await yandexMain.mailSignIn();
        await signInMail.inputLogin(userName);
        await signInMail.inputPassword(password);
        await mainMail.signOutUser();

        const logOut = await yandexMain.isElementOnPage(selector);
        expect(logOut).to.equal(true);
        browser.close();
    });
});