import chrome from 'chrome-aws-lambda';
import core from 'puppeteer-core';
// import core from 'puppeteer';
let _page: core.Page | null;

const exePath = '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe';

async function getPage() {
    if (_page) {
        return _page;
    }
    const browser = await core.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    });
    _page = await browser.newPage();
    return _page;
}

export async function getScreenshot() {
    const page = await getPage();
    await page.setViewport({ width: 2048, height: 1170 });
    await page.goto('https://celebration.minung.dev/message?m=%F0%9F%8E%89Celebration%20Message%F0%9F%8E%89%0AType%20a%20Message!');
    const file = await page.screenshot({ type: 'png' });
    return file;
}