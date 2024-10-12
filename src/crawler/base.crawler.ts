import { BaseScraper } from "./base.scraper";

export abstract class BaseCrawler {
    private scrapers: BaseScraper[] = [];

    abstract crawl(params?: any, maxPages?: number): void;

    registerScraper(scraper: BaseScraper): void {
        this.scrapers.push(scraper);
    }
}
