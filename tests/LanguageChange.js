const YandexMain = require('../pages/YandexMain');
const LanguageChange = require('../pages/LanguageChange');


const mainUrl = "https://yandex.by/";

describe('languageChange', function () {
    const yandexMain = new YandexMain();
    const languageChange = new LanguageChange();
    let selectedLanguage = "Interface language";


    it('languageChange', async () => {
        await browser.get(mainUrl);
        await yandexMain.choseLanguage();
        await languageChange.choseEanglish();
        await yandexMain.choseLanguage();
        await languageChange.checkLanguage();
        const language = await languageChange.checkLanguage(selectedLanguage);
        expect(language).to.equal(true);

        browser.close();
    });
});