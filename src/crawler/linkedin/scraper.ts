import { BaseScraper } from "../base.scraper";
import { JobInterface } from "../../interfaces/job";
import { LinkedinParamType } from "./crawler";

export class LinkedinScraper extends BaseScraper {
    private url: string = "";

    constructor(url: string) {
        super();
        this.url = url;
    }

    async scrape(): Promise<JobInterface[]> {
        
        return [];
    }
}
