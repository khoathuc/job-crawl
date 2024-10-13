import { ElementHandle } from "puppeteer";
import { BaseScraper } from "../base.scraper";

export class LinkedinScraper extends BaseScraper {
    JOB_SEARCH_SELECTOR = ".job-search-card";
    private res = [];

    /**
     * @desc scrape linkedin
     * @returns
     */
    async scrape() {
        try {
            // Init browser and page
            await this.init();

            // scrape elements
            const elementHdls = await this.fetchElements(
                this.JOB_SEARCH_SELECTOR
            );

            // Fetch all element and save jobs.
            await Promise.all(
                elementHdls.map(async (elementHdl) => {
                    await this.scrapeElement(elementHdl);
                })
            );
        } catch (error) {
            // TODO : handle error
            console.log(error.message);
        } finally {
            // await this.close();
        }
    }

    /**
     * @desc scrape each element
     * @param {ElementHandle} elementHdl
     */
    async scrapeElement(elementHdl: ElementHandle) {
        await elementHdl.evaluate((el) => {
            const title = el
                .getElementsByClassName(".base-search-card__title")[0]
                .textContent?.trim();

            console.log(title);
        });
    }
}
