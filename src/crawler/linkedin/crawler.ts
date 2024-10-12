import { DOMAIN } from "../../constants/index";
import { BaseCrawler } from "../base.crawler";
import { LinkedinScraper } from "./scraper";

export type LinkedinParamType = {
    keywords?: string;
    location?: string;
};

export class LinkedinCrawler extends BaseCrawler {
    readonly domain = DOMAIN.LINKEDIN;

    async crawl(params?: LinkedinParamType, maxPages: number = 10) {
        let currPage = 1;

        // construct new scraper and fetch jobs.
        while (currPage <= maxPages) {
            const scraper = new LinkedinScraper(
                this.makeURL({ page: currPage, params })
            );

            await scraper.scrape();
        }
    }

    makeURL({
        page,
        params,
    }: {
        page: number;
        params?: LinkedinParamType;
    }): string {
        const locationText = params?.location
            ? "&location=" + params.location
            : "";
        const keywordsText = params?.keywords
            ? "keywords=" + params.keywords
            : "";

        return `${this.domain}?${keywordsText}&start=${
            page * 25
        }${locationText}`;
    }
}
