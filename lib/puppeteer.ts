import chrome from "chrome-aws-lambda";
import core from "puppeteer-core";

const launchPuppeteer = async () => {
  const browser = await core.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });
  const page = await browser.newPage();

  return page;
};

export const captureScreenshot = async (html: string) => {
  const page = await launchPuppeteer();

  await page.setViewport({ width: 1200, height: 600 });
  await page.setContent(html, { waitUntil: "networkidle0" });

  const file = await page.screenshot({ type: "png" });
  await page.close();

  return file;
};
