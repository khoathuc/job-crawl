import puppeteer, { Browser, ElementHandle, Page } from "puppeteer";
import { ConfigScraper } from "./types";
export abstract class BaseScraper {
    private conf: ConfigScraper;
    private url: string;
    private browser: Browser;
    private page: Page;

    constructor(conf: ConfigScraper, url: string) {
        this.conf = conf;
        this.url = url;
    }

    async init() {
        this.browser = await puppeteer.launch(this.conf);
        this.page = await this.browser.newPage();
        await this.page.goto(this.url, { waitUntil: "networkidle0" });
    }

    async close() {
        await this.browser.close();
    }

    async fetchHTML() {}

    /**
     * @desc get seletor
     * @param {string} selector
     * @returns {ElementHandle[]}
     */
    async fetchElements(selector: string, func: void) {
        await this.page.waitForSelector(selector, {
            visible: true,
            timeout: 5000,
        });

        return await this.page.$$(selector);
    }

    abstract scrape(): Promise<any>;

    getPage() {
        return this.page;
    }

    getBrowser() {
        return this.browser;
    }
}
