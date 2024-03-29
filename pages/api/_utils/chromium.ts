import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export const screenshot = async ({ html, url }: { html?: string, url?: string }) => {
  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless
      }
    : {
        args: [],
        executablePath: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe',
        
      };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 720, height: 480 });
  if (html) {
    await page.setContent(html);
  }
  if (url) {
    await page.goto(url, { waitUntil: 'networkidle0' });
  }
  await page.evaluateHandle('document.fonts.ready');
  return await page.screenshot({ type: 'png' });
}