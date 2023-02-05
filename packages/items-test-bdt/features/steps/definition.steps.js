const {expect} = require('chai');
const {Given, When, Then} = require('cucumber');
const puppeteer = require('puppeteer');

global.testContext = {};

Given('I write the url of portal {string} in  the browser', {timeout: 20 * 1000}, async (portalUrl) => {
    const width = 1280;
    const height = 1200;
    global.testContext.browser = await puppeteer.launch({
        headless: false,
        launch: {},
        browserContext: 'default',
        exitOnPageError: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            `--window-size=${width},${height}`
        ]
    });
    global.testContext.page = await global.global.testContext.browser.newPage();
    await global.testContext.page.goto(portalUrl);
    await global.testContext.page.setViewport({width: width, height: height});
    await global.testContext.page.waitForSelector("body");
});


When('I write my search keyword: {string}', {timeout: 20 * 1000}, async (searchKeyWord) => {
    await expect(await global.testContext.page.waitForSelector(".ml-search-bar__input"));
    await global.testContext.page.type('.ml-search-bar__input', searchKeyWord);
    await global.testContext.page.click(".ml-search-bar__button");
});

Then('I should view a breadcrumb with the content: {string}', {timeout: 20 * 1000}, async (resultContent) => {
    await expect(await global.testContext.page.waitForSelector(".list__list-wrapper"));
    const title = await global.testContext.page.mainFrame().title();
    await expect(await global.testContext.page.waitForSelector(".ml-breadcrumb"));
    const element = await global.testContext.page.$(".ml-breadcrumb span:first-child");
    const text = await (await element.getProperty('textContent')).jsonValue();
    const url = await global.testContext.page.url();
    await expect(title).to.eql('Mercado libre');
    expect(text).contains(resultContent);
    //await expect(text).to.eql(resultContent);
    await global.testContext.page.waitFor(1000);
    await global.testContext.browser.close();
});

Then('I should view a item with the title: {string}', {timeout: 20 * 1000}, async (resultContent) => {
    await expect(await global.testContext.page.waitForSelector(".ml-item-detail__title-wrapper__title"));
    const title = await global.testContext.page.mainFrame().title();
    await expect(await global.testContext.page.waitForSelector(".ml-item-detail__title-wrapper__title"));
    const element = await global.testContext.page.$(".ml-item-detail__title-wrapper__title");
    const text = await (await element.getProperty('textContent')).jsonValue();
    const url = await global.testContext.page.url();
    await expect(title).to.eql('Mercado libre');
    expect(text).contains(resultContent);
    await global.testContext.page.waitFor(1000);
    await global.testContext.browser.close();
});
