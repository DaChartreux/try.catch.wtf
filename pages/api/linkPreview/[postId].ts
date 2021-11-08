import type { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";
import fetch from "node-fetch";

import { captureScreenshot, launchPuppeteer } from "@lib/puppeteer";

import type { Post, Views } from "@typings/data";

const HTML_TEMPLATE = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      @font-face {
        font-family: Jost VF;
        font-weight: 100 900;
        src: url("https://try.catch.wtf/fonts/Jost/Jost-VF.woff2")
          format("woff2-variations");
      }
      html,
      body {
        width: 1200px;
        height: 600px;
        margin: 0;
      }
      .fg {
        position: relative;
        width: 100%;
        height: 100%;
        background: white;
      }
      .fg .item {
        z-index: 1;
      }
      .item.container {
        position: absolute;
        top: 135px;
        left: 85px;
      }
      .item.footer {
        position: absolute;
        bottom: 0;
        left: 85px;
        right: 85px;
        bottom: 50px;
        display: flex;
        justify-content: space-between;
        color: white;
        font-family: Jost VF;
      }
      .footer-item {
        display: flex;
        place-items: center;
        margin: 0 5rem 0 0;
      }
      .item.container .title,
      .item.container .description {
        font-family: Jost VF;
        font-weight: 500;
        font-size: 72px;
        margin: 0;
        color: white;
        max-width: 1000px;
      }
      .item.container .description {
        font-size: 36px;
        opacity: 0.90;
      }
      .footer-item .icon,
      .footer-item .text {
        display: inline-block;
      }
      .footer-item .icon {
        width: 2.25rem;
        height: 2.25rem;
        display: inline-block;
        vertical-align: middle;
      }
      .footer-item .text {
        font-weight: 450;
        margin-left: 1rem;
      }
    </style>
  </head>
  <body>
    <div class="fg">
      <div class="item container">
        <p class="title">{{title}}</p>
        <p class="description">{{description}}</p>
      </div>
      <div class="item footer">
        <div style="display: flex">
          <div class="footer-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span class="text" style="font-size: 2rem">{{viewsCount}}</span>
          </div>
          <div class="footer-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text" style="font-size: 2rem">{{updatedAt}}</span>
          </div>
        </div>
        <div>
          <svg width="300" height="39" viewBox="0 0 300 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.867 34.8141C50.867 33.6911 51.261 32.7212 52.0491 31.9045C52.8372 31.0877 53.848 30.6793 55.0816 30.6793C56.3151 30.6793 57.326 31.0877 58.1141 31.9045C58.9022 32.7212 59.2962 33.6911 59.2962 34.8141C59.2962 35.9372 58.9022 36.9241 58.1141 37.7749C57.326 38.5916 56.3151 39 55.0816 39C53.848 39 52.8372 38.5916 52.0491 37.7749C51.261 36.9241 50.867 35.9372 50.867 34.8141Z" fill="white"/>
            <path d="M73.0416 20.0105C73.0416 22.3586 73.5727 24.4005 74.6349 26.1361C75.6972 27.8717 77.1021 29.216 78.8496 30.1689C80.5971 31.0877 82.4988 31.5471 84.5548 31.5471C87.0904 31.5471 89.2491 31.0707 91.0309 30.1178C92.847 29.1649 94.3547 28.0079 95.554 26.6466V34.9162C94.0805 36.0733 92.4872 36.9751 90.7739 37.6217C89.0607 38.2683 86.8848 38.5916 84.2464 38.5916C81.4709 38.5916 78.901 38.1492 76.5367 37.2644C74.2066 36.3456 72.185 35.0694 70.4717 33.4359C68.7584 31.8024 67.4221 29.8456 66.4627 27.5654C65.5032 25.2853 65.0235 22.767 65.0235 20.0105C65.0235 17.2539 65.5032 14.7356 66.4627 12.4555C67.4221 10.1754 68.7584 8.21859 70.4717 6.58508C72.185 4.95157 74.2066 3.69241 76.5367 2.80759C78.901 1.88874 81.4709 1.42932 84.2464 1.42932C86.8848 1.42932 89.0607 1.75262 90.7739 2.39921C92.4872 3.01178 94.0805 3.91361 95.554 5.10471V13.3743C94.3547 11.9791 92.847 10.822 91.0309 9.90314C89.2491 8.95026 87.0904 8.47382 84.5548 8.47382C82.4988 8.47382 80.5971 8.95026 78.8496 9.90314C77.1021 10.822 75.6972 12.1492 74.6349 13.8848C73.5727 15.5864 73.0416 17.6283 73.0416 20.0105Z" fill="white"/>
            <path d="M126.376 37.877L122.623 29.8115H110.288L106.587 37.877H98.2094L116.456 0L134.753 37.877H126.376ZM116.456 13.7827L112.035 23.9921H120.876L116.456 13.7827Z" fill="white"/>
            <path d="M131.443 8.7801V2.14398H158.222V8.7801H148.508V37.877H141.106V8.7801H131.443Z" fill="white"/>
            <path d="M165.799 20.0105C165.799 22.3586 166.33 24.4005 167.392 26.1361C168.455 27.8717 169.859 29.216 171.607 30.1689C173.355 31.0877 175.256 31.5471 177.312 31.5471C179.848 31.5471 182.007 31.0707 183.788 30.1178C185.604 29.1649 187.112 28.0079 188.311 26.6466V34.9162C186.838 36.0733 185.245 36.9751 183.531 37.6217C181.818 38.2683 179.642 38.5916 177.004 38.5916C174.228 38.5916 171.658 38.1492 169.294 37.2644C166.964 36.3456 164.942 35.0694 163.229 33.4359C161.516 31.8024 160.18 29.8456 159.22 27.5654C158.261 25.2853 157.781 22.767 157.781 20.0105C157.781 17.2539 158.261 14.7356 159.22 12.4555C160.18 10.1754 161.516 8.21859 163.229 6.58508C164.942 4.95157 166.964 3.69241 169.294 2.80759C171.658 1.88874 174.228 1.42932 177.004 1.42932C179.642 1.42932 181.818 1.75262 183.531 2.39921C185.245 3.01178 186.838 3.91361 188.311 5.10471V13.3743C187.112 11.9791 185.604 10.822 183.788 9.90314C182.007 8.95026 179.848 8.47382 177.312 8.47382C175.256 8.47382 173.355 8.95026 171.607 9.90314C169.859 10.822 168.455 12.1492 167.392 13.8848C166.33 15.5864 165.799 17.6283 165.799 20.0105Z" fill="white"/>
            <path d="M195.575 2.14398H202.976V15.5183H219.732V2.14398H227.133V37.877H219.732V22.2055H202.976V37.877H195.575V2.14398Z" fill="white"/>
            <path d="M234.826 34.8141C234.826 33.6911 235.22 32.7212 236.008 31.9045C236.796 31.0877 237.807 30.6793 239.04 30.6793C240.274 30.6793 241.285 31.0877 242.073 31.9045C242.861 32.7212 243.255 33.6911 243.255 34.8141C243.255 35.9372 242.861 36.9241 242.073 37.7749C241.285 38.5916 240.274 39 239.04 39C237.807 39 236.796 38.5916 236.008 37.7749C235.22 36.9241 234.826 35.9372 234.826 34.8141Z" fill="white"/>
            <path d="M264.58 31.0877L268.435 20.0105H272.752L265.197 38.8724L259.517 27.2081L253.838 38.8724L246.282 20.0105H250.626L254.506 31.0877L259.517 19.1171L264.58 31.0877Z" fill="white"/>
            <path d="M274.09 23.3285V20.0105H287.479V23.3285H282.622V37.877H278.921V23.3285H274.09Z" fill="white"/>
            <path d="M289.566 20.0105H300V23.2264H293.164V27.2081H299.743V30.2709H293.164V37.877H289.566V20.0105Z" fill="white"/>
            <path d="M0 23.3285V20.0105H13.3892V23.3285H8.53208V37.877H4.83142V23.3285H0Z" fill="white"/>
            <path d="M15.4766 20.0105H21.5416C22.9636 20.0105 24.1715 20.2572 25.1652 20.7507C26.176 21.2271 26.947 21.8907 27.4781 22.7415C28.0092 23.5923 28.2748 24.5877 28.2748 25.7278C28.2748 26.9869 27.9492 28.0759 27.2982 28.9948C26.6472 29.8966 25.7049 30.5517 24.4713 30.9601L29.3541 37.877H24.9596L20.7706 31.394H19.1773V37.877H15.4766V20.0105ZM21.3103 23.1754H19.1773V28.4843H21.3103C22.2698 28.4843 23.0322 28.2546 23.5975 27.7952C24.1629 27.3187 24.4456 26.6636 24.4456 25.8298C24.4456 24.9791 24.1629 24.324 23.5975 23.8645C23.0322 23.4051 22.2698 23.1754 21.3103 23.1754Z" fill="white"/>
            <path d="M41.41 20.0105H45.6503L39.4569 30.4751V37.877H35.6791V30.5007L29.4856 20.0105H33.726L37.5551 27.2081L41.41 20.0105Z" fill="white"/>
          </svg>        
        </div>
      </div>
      <div class="bg" style="position: absolute; right: 0">
        <img src="{{baseUrl}}/img/{{slug}}/linkPreviewBg.png" />
      </div>
    </div>
  </body>
</html>
`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://try.catch.wtf"
      : "http://localhost:3000";

  try {
    const { postId } = req.query;

    const fetchPromise = fetch(`${baseUrl}/api/post/${postId}`);
    const puppeteerLaunchPromise = launchPuppeteer();

    const [fetchResp, puppeteerPageResp] = await Promise.allSettled([
      fetchPromise,
      puppeteerLaunchPromise,
    ]);

    if (
      fetchResp.status === "rejected" ||
      puppeteerPageResp.status === "rejected"
    ) {
      console.log(fetchResp.status === "rejected" && fetchResp.reason);
      console.log(
        puppeteerPageResp.status === "rejected" && puppeteerPageResp.reason,
      );
      return res.send(400);
    }

    const post = (await fetchResp.value.json()) as Post & Views;

    if (post === null) {
      return res.status(404).send("post not found");
    }

    const html = HTML_TEMPLATE.replace("{{baseUrl}}", baseUrl)
      .replace("{{title}}", post.title)
      .replace("{{description}}", post.description)
      .replace("{{viewsCount}}", post.views.toString())
      .replace("{{slug}}", post.slug)
      .replace("{{updatedAt}}", dayjs(post.updatedAt).format("DD MMM, YYYY"));

    const image = await captureScreenshot(puppeteerPageResp.value, html);

    res.setHeader("Content-type", "image/png");
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate=59");
    res.send(image);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
};

export default handler;
