
const helpers = require('../helpers/helpers.js');

class YandexMain {
    constructor() {
        this.signMail = by.css('[data-statlog="notifications.mail.logout.domik.login.big"]');
        this.video = by.css('[data-id="video"]');
        this.images = by.css('[data-id="images"]');
        this.news = by.css('[data-id="news"]');
        this.maps = by.css('[data-id="maps"]');
        this.market = by.css('[data-id="market"]');
        this.translate = by.css('[data-id="translate"]');
        this.music = by.css('[data-id="music"]');
        this.languageOption = by.css('[title="Выбрать язык"]');
        this.choseLanguageField = by.css('[data-statlog="head.lang.more"]');
        this.videoLink = "https://yandex.by/portal/video?stream_active=category&stream_channel=default&stream_category=film&from_block=main_video_tabs";
        this.imagesLink = "https://yandex.by/images/";
        this.newsLink = "https://yandex.by/news/";
        this.mapsLink = "https://yandex.by/maps";
        this.marketLink = "https://market.yandex.by/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch";
        this.translateLink = "https://translate.yandex.by/";
        this.musicLink = "https://music.yandex.by/";

    }
    async goToVideo() {
        const button = await element(this.video);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async goToImages() {
        const button = await element(this.images);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async goToNews() {
        const button = await element(this.news);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async goToMaps() {
        const button = await element(this.maps);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async goToMarket() {
        const button = await element(this.market);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async goToTranslate() {
        const button = await element(this.translate);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async goToMusic() {
        const button = await element(this.music);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async goToMain() {
        await browser.get('https://yandex.by/');
    }
    async checkVideoPage() {
        const button = await element(this.video);
        await helpers.waitForVisible(button);
        let url = await button.getAttribute('href');
        if(url === this.videoLink) {
            return true;
        } else {
            throw new Error('Element is not on page');
        }
    }
    async checkImagePage() {
        const button = await element(this.images);
        await helpers.waitForVisible(button);
        let url = await button.getAttribute('href');
        if(url === this.imagesLink) {
            return true;
        } else {
            throw new Error('Element is not on page');
        }
    }
    async checkNewsPage() {
        const button = await element(this.news);
        await helpers.waitForVisible(button);
        let url = await button.getAttribute('href');
        if(url === this.newsLink) {
            return true;
        } else {
            throw new Error('Element is not on page');
        }
    }
    async checkMapsPage() {
        const button = await element(this.maps);
        await helpers.waitForVisible(button);
        let url = await button.getAttribute('href');
        if(url === this.mapsLink) {
            return true;
        } else {
            throw new Error('Element is not on page');
        }
    }
    async checkMarketPage() {
        const button = await element(this.market);
        await helpers.waitForVisible(button);
        let url = await button.getAttribute('href');
        if(url === this.marketLink) {
            return true;
        } else {
            throw new Error('Element is not on page');
        }
    }
    async checkTranslatePage() {
        const button = await element(this.translate);
        await helpers.waitForVisible(button);
        let url = await button.getAttribute('href');
        if(url === this.translateLink) {
            return true;
        } else {
            throw new Error('Element is not on page');
        }
    }
    async checkMusicPage() {
        const button = await element(this.music);
        await helpers.waitForVisible(button);
        let url = await button.getAttribute('href');
        if(url === this.musicLink) {
            return true;
        } else {
            throw new Error('Element is not on page');
        }
    }

    async choseLanguage()
    {
        const elm = await element(this.languageOption);
        await helpers.waitForVisible(elm);
        await elm.click();
        const elm2 = await element(this.choseLanguageField);
        await helpers.waitForVisible(elm);
        await elm2.click();
    }
    async mailSignIn() {
        const button = await element(this.signMail);
        await helpers.waitForVisible(button);
        await button.click();
    }
    async isElementOnPage( selector) {
        const elm = await browser.isElementPresent(by.css(selector));
        //await helpers.waitForVisible(elm)
        if(elm === true) {
            return true;
        } else {
            throw new Error('Element is not on page');
        }



   }

}

module.exports = YandexMain;
