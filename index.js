const puppeteer = require('puppeteer');

//all functions will be asynchronous

async function run() {
    const browser = await puppeteer.launch({
        headless: 'new'   //to see the browser
    }); //varaible to launch a browser
    const page = await browser.newPage(); //to access a page with a page variable
    await page.goto("https://www.traversymedia.com"); //to access a specific page
    //Now you can access DOM elements below this line or pretty much anything you want

    // await page.screenshot({ path: 'screenshot.png', fullPage: true }); //to take a screenshot of the page
    // await page.pdf({ path: 'screenshot.pdf', format: 'A4'}); //to take a screenshot of the page
    // const html = await page.content();

    // const title = await page.evaluate(() => document.title); // to get page title
    const text = await page.evaluate(() => document.body.innerText); //to get all the text on the website
    console.log(text);

    await browser.close(); //to close the browser
}

run();
