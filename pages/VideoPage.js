const helpers = require('../helpers/helpers.js');

class VideoPage {
    constructor() {
        this.returnToMain = by.css('[class="logo logo_type_link logo_name_ys-ru-86x35"]');
        this.videoUrl = "https://yandex.by/portal/video?stream_active=category&stream_category=film";
    }
    async goToMain() {
        const button = await element(this.returnToMain);
        await helpers.waitForVisible(button);
        await button.click();
    }

    async changeToVideo2() {
        let handlePromise = browser.driver.getAllWindowHandles();
        handlePromise.then(function (handles) {
        let parentHandle = handles[0];
        let secondHandle = handles[1];
        browser.driver.switchTo().window(secondHandle);
    })
    }

    async checkVideo(videoUrl) {
        //const elm = await browser.executeScript('document.querySelector(".stream-header__categories").hidden()');
        //const elm = await element(by.css('.navigation__item_name_video'));
        //await  browser.get("https://yandex.by/portal/video?stream_active=category&stream_category=film");
        const url = await browser.getCurrentUrl();
        if(url === videoUrl) {
            return true;
        } else {
            throw new Error('Not video page');
        }
    }
}

module.exports = VideoPage;
