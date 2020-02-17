const YandexMain = require('../pages/YandexMain');
const SignInMail = require('../pages/SignInMail');

const mainUrl = "https://yandex.by/";

describe('mailIncorrectPassword', function () {
    const yandexMain = new YandexMain();
    const signInMail = new SignInMail();
    let userName = "valentyn.lutsuk";
    let incorrectpassword = "123";
    let incorrectPasswordMessage = "Неверный пароль";


    it('mail Invalid Pass', async () => {
        await browser.get(mainUrl);
        await yandexMain.mailSignIn();
        await signInMail.inputLogin(userName);
        await signInMail.inputPassword(incorrectpassword);

        const signedUserName = await signInMail.checkIncorrectPassword(incorrectPasswordMessage);
        expect(signedUserName).to.equal(true);
        browser.close();
    });
});
