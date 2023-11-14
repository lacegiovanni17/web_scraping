const puppeteer = require('puppeteer');

//all functions will be asynchronous

async function run() {
    const browser = await puppeteer.launch({
        headless: 'new'   //to see the browser
    }); //varaible to launch a browser
    const page = await browser.newPage(); //to access a page with a page variable
    await page.goto("https://www.traversymedia.com"); //to access a specific page

    // await page.screenshot({ path: 'screenshot.png', fullPage: true }); //to take a screenshot of the page
    await page.pdf({ path: 'screenshot.pdf', format: 'A4'}); //to take a screenshot of the page
    
    await browser.close(); //to close the browser
}

run();
