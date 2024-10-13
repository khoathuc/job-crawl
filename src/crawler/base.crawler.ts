import { BaseScraper } from "./base.scraper";
import { ConfigScraper } from "./types";

export abstract class BaseCrawler {
    private scrapers: BaseScraper[] = [];

    abstract crawl(
        conf: ConfigScraper,
        params?: any,
        maxPages?: number
    ): void;

    registerScraper(scraper: BaseScraper): void {
        this.scrapers.push(scraper);
    }
}
