const puppeteer = require('puppeteer');
const width = 1280;
const height = 1200;

(async () => {
    const browser = await puppeteer.launch({
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
    const page = await browser.newPage();

    const browserErrors = [];
    page.on('pageerror', (error) => {
        browserErrors.push(error);
    });
    await page.goto('http://localhost:3000');
    await page.setViewport({width: width, height: height});
    await page.waitForSelector("body");

    if (browserErrors.length !== 0) {
        errors.forEach((e) => {
            console.error('e2e error: ', e);
        });
        process.exit(1);
    }

    await this.insertGremlins(page);
    const val = await this.runGremlins(page);
    console.log('The end', val);
    await page.waitForTimeout(15000);
    await browser.close();

})();


module.exports.insertGremlins = async (page) => {
    await page.addScriptTag({url: 'https://unpkg.com/gremlins.js@2.2.0/dist/gremlins.min.js'});
};

module.exports.runGremlins = async (page) => {
    await page.evaluate(() => {

        const customToucher = gremlins.species.toucher({
            touchTypes: ['gesture'],
            canTouch: (element) => element.className === 'ml-search-bar__button', log: true,
            maxTouches: 200
        });

        const customFormFiller = gremlins.species.formFiller({
            randomizer: () => "dd",
            canFillElement: (element) => element.className === 'ml-search-bar__input', log: true
        });

        const customClicker = gremlins.species.clicker({
            // which mouse event types will be triggered
            clickTypes: ['click'],
            // Click only if parent is has class test-class
            canClick: (element) => element.className === 'ml-search-bar__button',// || 'item__image-wrapper',
            // by default, the clicker gremlin shows its action by a red circle
            // overriding showAction() with an empty function makes the gremlin action invisible
            showAction: (x, y) => {
            },
        });

        const customLogger = {
            log: function (msg) {
                console.log("result: ",msg);
            },
            info: function (msg) {
                console.log("result: ",msg);
            },
            warn: function (msg) {
                console.log("result: ",msg);
            },
            error: function (msg) {
                console.log("result: ",msg);
            },
        };

        return new Promise((resolve, reject) => {
            window.gremlins.createHorde({
                distribution: [0.6, 0.1, 0.1, 0.2],
                //species: [gremlins.species.clicker(), gremlins.species.toucher(), gremlins.species.formFiller(), gremlins.species.typer()],
                species: [customClicker, gremlins.species.toucher(), customFormFiller, gremlins.species.typer()],
                mogwais: [gremlins.mogwais.alert(), gremlins.mogwais.fps(), gremlins.mogwais.gizmo()],
                strategies: [gremlins.strategies.distribution()],
                delay: 100,
                logger: customLogger,
                randomizer: new gremlins.Chance(1234)
            }).unleash()
                .then((a, b) => {
                    console.log('Gremlins test success', a, b);
                    resolve('end');
                })
        });
    });
};

module.exports.wait = (time) => {
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};
