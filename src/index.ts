import yargs from "yargs";
import { LinkedinCrawler } from "./crawler/linkedin/crawler";

// Configure yargs to parse command-line arguments
const argv = yargs(process.argv)
    .option("headless", {
        type: "boolean",
        default: false, // Default value can be set here
        description: "Run in headless mode",
    })
    .option("keywords", {
        type: "string",
        description: "Keywords to search for",
    })
    .option("location", {
        type: "string",
        description: "location to search for",
    })
    .help().argv; // Show help message // Parse the arguments

// Crawl linkedin
const crawlLinkedin = async () => {
    try {
        const linkedinCrawler = new LinkedinCrawler();

        await linkedinCrawler.crawl(
            { headless: argv.headless },
            {
                keywords: argv.keywords,
                location: argv.location,
            }
        );
    } catch (error) {
        console.log(error.message);
    }
};

// run
(async () => crawlLinkedin())();
