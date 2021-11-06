import chrome from "chrome-aws-lambda";
import core from "puppeteer-core";

let _page: core.Page | null = null;

const launchPuppeteer = async () => {
  if (_page) {
    return _page;
  }

  const path =
    process.env.NODE_ENV === "production"
      ? await chrome.executablePath
      : process.platform === "win32"
      ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
      : process.platform === "linux"
      ? "/usr/bin/google-chrome"
      : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  const browser = await core.launch({
    args: chrome.args,
    executablePath: path,
    headless: chrome.headless,
  });

  _page = await browser.newPage();

  return _page;
};

export const captureScreenshot = async (html: string) => {
  const page = await launchPuppeteer();

  await page.setViewport({ width: 1200, height: 600 });
  await page.setContent(html, { waitUntil: "networkidle0" });

  const file = await page.screenshot({ type: "png" });

  return file;
};
