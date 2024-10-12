import yargs from "yargs";
import { LinkedinCrawler } from "./crawler/linkedin/crawler";

// Configure yargs to parse command-line arguments
const argv = yargs(process.argv)
    .option("headless", {
        type: "boolean",
        default: true, // Default value can be set here
        description: "Run in headless mode",
    })
    .option("keywords", {
        type: "string",
        demandOption: true, // Require this option
        description: "Keywords to search for",
    })
    .option("location", {
        type: "string",
        demandOption: true, // Require this option
        description: "location to search for",
    })
    .help().argv; // Show help message // Parse the arguments

// Crawl linkedin
const linkedinCrawler = new LinkedinCrawler();
(async () => {
    await linkedinCrawler.crawl({keywords: argv.keywords});
})();
