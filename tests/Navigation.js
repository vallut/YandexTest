const YandexMain = require('../pages/YandexMain');
const VideoPage =  require('../pages/VideoPage');

const mainUrl = "https://yandex.by/";

describe('navigationTests', function () {
    const yandexMain = new YandexMain();


    fit('navigation tests', async () => {
        await browser.get(mainUrl);
        const video = await yandexMain.checkVideoPage();
        expect(video).to.equal(true);
        //await yandexMain.goToVideo();
       // await yandexMain.goToMain();
        const image = await yandexMain.checkImagePage();
        expect(image).to.equal(true);
       // await yandexMain.goToImages();
       // await yandexMain.goToMain();
        const maps = await yandexMain.checkMapsPage();
        expect(maps).to.equal(true);
       // await yandexMain.goToMaps();
       // await yandexMain.goToMain();
        const market = await yandexMain.checkMarketPage();
        expect(market).to.equal(true);
      //  await yandexMain.goToMarket();
       // await yandexMain.goToMain();
        const translate = await yandexMain.checkTranslatePage();
        expect(translate).to.equal(true);
       // await yandexMain.goToTranslate();
      //  await yandexMain.goToMain();
        const music = await yandexMain.checkMusicPage();
        expect(music).to.equal(true);
       // await yandexMain.goToMusic();
       // await yandexMain.goToMain();
        const news = await yandexMain.checkNewsPage();
        expect(news).to.equal(true);
       // await yandexMain.goToNews();
       // await yandexMain.goToMain();

    });
});
