export abstract class BaseScraper {
    init() {}

    close() {}

    fetchHTML() {}

    abstract scrape(): Promise<any>;
}
