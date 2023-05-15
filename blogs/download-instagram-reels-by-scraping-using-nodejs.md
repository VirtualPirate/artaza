---
title: Download Instagram reels by scraping using NodeJS
date: May 12, 2023
description: How to use NodeJS to scrape direct video links of Instagram Links using Puppeeteer and Cheerio.

tags:
  - nodejs
  - web scraping

cover_image: ./graphics/blog-cover/nodejs_puppeteer_reel.png
---

## Introduction

Today, we are going to use web scraping in NodeJS to extract direct download links for Instagram Reels Video

## Install Required NPM Packages

**`Puppeteer`** : Puppeterr is a Node.js library which provides a high-level APU to control Chrome/Chromium ( Browser )

**`Cheerio`** : Cheerio is a HTML DOM parser and helps us traverse raw HTML and XML

```bash
npm install puppeteer
npm install cheerio
```

Firs, we need get the raw generated HTML, using `Pupperteer` and then parse the HTML using `Cheerio` to extract out the direct download link.

\
\
**Note**: We are using `Puppeteer` to get the HTML because the video link is hydrated into the page using Javascript. If, we use a simple request to get the raw HTML, the video tag won't be available

## First Step (Get the raw HTML)

This is how the raw HTML looks likes when we inspect the page

![Instagram Reel Link Page Inspect Image](./graphics/blog-images/download-instagram-reels-by-scraping-using-nodejs/instagramDOM.png "MarineGEO logo")

Define a function that gets the raw HTML, including the `video` tag

```javascript
async function getHTML(url) {
  // Launch a headless browser instance
  const browser = await puppeteer.launch({ headless: "new" });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a URL
  await page.goto(url);

  // Wait for the video tag to appear
  await page.waitForSelector("video");

  // Get the HTML content
  const html = await page.content();

  // Close the browser
  await page.close();
  await browser.close();

  // Return the HTML content
  return html;
}
```

## Second Step (Parse the raw HTML)

We are going to parse the raw HTML, that we get from the `getHTML()` function

```javascript
async function getReelVideo(url) {
  const html = await getHTML(url);

  // calls cheerio to process the html received
  const $ = cheerio.load(html);

  // Searches the html for the video tag and get the src atttribute
  const videoDirectLink = $("video").attr("src");

  // returns the direct video link
  return videoDirectLink;
}
```

## Last Part

Now we can run the `getReelVideo()` function the get direct download link of a Instagram Reel

```javascript
getReelVideo("https://www.instagram.com/reel/CrQ9TvAAuRe/").then((link) =>
  console.log(link)
);
```

**Output:**

`https://instagram.fccu19-1.fna.fbcdn.net/v/t66.30100-16/120641351_1702239160229021_7989127058867652451_n.mp4?_nc_ht=instagram.fccu19-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QoyEWM5tB-AAX_8SGz5&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAU1hwxYlztdGfqHxpNxyTBDCOzNnLwBw7KnEdj7dLAuw&oe=6463ADB1&_nc_sid=4f375e`
