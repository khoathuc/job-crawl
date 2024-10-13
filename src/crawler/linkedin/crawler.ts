import { DOMAIN } from "../../constants/index";
import { BaseCrawler } from "../base.crawler";
import { ConfigScraper } from "../types";
import { LinkedinScraper } from "./scraper";

export type LinkedinParamType = {
    keywords?: string;
    location?: string;
};

export class LinkedinCrawler extends BaseCrawler {
    URL = DOMAIN.LINKEDIN;

    async crawl(
        conf: ConfigScraper,
        params?: LinkedinParamType,
        maxPages: number = 3
    ) {
        let currPage = 1;

        // construct new scraper and fetch jobs.
        while (currPage <= maxPages) {
            const scraper = new LinkedinScraper(
                conf,
                this.makeURL({ page: currPage, params })
            );

            await scraper.scrape();

            currPage++;
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

        return `${this.URL}?${keywordsText}&start=${page * 25}${locationText}`;
    }
}
