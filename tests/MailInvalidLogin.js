const YandexMain = require('../pages/YandexMain');
const SignInMail = require('../pages/SignInMail');

const mainUrl = "https://yandex.by/";

describe('mailIncorrectLogin', function () {
    const yandexMain = new YandexMain();
    const signInMail = new SignInMail();
    let userName = "123.123";
    let incorrectLoginMessage = "Такой логин не подойдет";


    it('mail InvalidLogin', async () => {
        await browser.get(mainUrl);
        await yandexMain.mailSignIn();
        await signInMail.inputLogin(userName);

        const invalidLogin = await signInMail.checkIncorrectLogin(incorrectLoginMessage);
        expect(invalidLogin).to.equal(true);
        browser.close();
    });
});
