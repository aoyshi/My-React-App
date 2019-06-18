const puppeteer = require('puppeteer');

let browser = null,
    page = null;

describe('Tests for templates', () => {
    beforeEach(async() => {
        browser = await puppeteer.launch({
            headless: false
        });

        page = await browser.newPage();
        await page.emulate({
            viewport: {
                width: 1920,
                height: 1080
            },
            userAgent: ''
        });
    });

    afterEach(() => {
        browser.close();
    });

    test('Dummy Puppeteer Test', async() => {
        await page.goto('http://uxmetrics-test-00.mathworks.com:8080/UXMetricsApp', {"waitUntil" : "networkidle0"});
        await page.screenshot({path: 'test/screenshots/test-screenshot.png'});
    });
});
