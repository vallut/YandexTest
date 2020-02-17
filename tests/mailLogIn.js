const YandexMain = require('../pages/YandexMain');
const SignInMail = require('../pages/SignInMail');
const MainMail = require('../pages/MainMail');

const mainUrl = "https://yandex.by/";

describe('MailLogIn', function () {
    const yandexMain = new YandexMain();
    const signInMail = new SignInMail();
    const mainMail = new MainMail();
    let userName = "valentyn.lutsuk";
    let password = "cHBeqZwUaAw_7P3";


    it('mail SignIn', async () => {
        await browser.get(mainUrl);
        await yandexMain.mailSignIn();

        await signInMail.inputLogin(userName);
        await signInMail.inputPassword(password);

        const signedUserName = await mainMail.checkSigndeUser(userName);
        expect(signedUserName).to.equal(userName);
        browser.close();
    });
});
