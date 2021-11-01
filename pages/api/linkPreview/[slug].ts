import type { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";
import fetch from "node-fetch";

import { captureScreenshot } from "@lib/puppeteer";

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
        color: #be123c;
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
        color: #be123c;
      }
      .item.container .description {
        font-size: 36px;
        opacity: 0.6;
      }
      .footer-item .icon,
      .footer-item .text {
        display: inline-block;
      }
      .footer-item .icon {
        width: 2rem;
        height: 2rem;
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
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span class="text" style="font-size: 2rem">{{viewsCount}}</span>
          </div>
          <div class="footer-item">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span class="text" style="font-size: 2rem">{{createdAt}}</span>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="305"
            height="40"
            fill="none"
          >
            <g fill="#BE123C" fill-opacity=".65" filter="url(#a)">
              <path
                d="M51.66 35.7a4.17 4.17 0 0 1 4.28-4.23 4.17 4.17 0 0 1 4.28 4.24c0 1.15-.4 2.16-1.2 3.03A4.07 4.07 0 0 1 55.94 40a4.07 4.07 0 0 1-3.08-1.26 4.35 4.35 0 0 1-1.2-3.03Zm22.52-15.18c0 2.41.54 4.5 1.62 6.29a11.33 11.33 0 0 0 10.07 5.55c2.58 0 4.77-.5 6.58-1.47a15.87 15.87 0 0 0 4.6-3.56v8.48a18.22 18.22 0 0 1-4.86 2.78c-1.74.66-3.95 1-6.63 1-2.82 0-5.43-.46-7.83-1.37a18.8 18.8 0 0 1-6.16-3.93 17.7 17.7 0 0 1-4.07-6.02 19.96 19.96 0 0 1-1.46-7.75c0-2.82.49-5.4 1.46-7.75a17.7 17.7 0 0 1 10.23-9.89c2.4-.94 5.01-1.41 7.83-1.41 2.68 0 4.89.33 6.63 1a16.5 16.5 0 0 1 4.85 2.77v8.48a14.76 14.76 0 0 0-4.59-3.56c-1.8-.98-4-1.47-6.58-1.47a11.78 11.78 0 0 0-10.07 5.55 11.72 11.72 0 0 0-1.62 6.28Zm54.17 18.33-3.81-8.27H112l-3.76 8.27h-8.5L118.26 0l18.59 38.85h-8.51Zm-10.08-24.71-4.49 10.47h8.98l-4.49-10.47ZM133.5 9V2.2h27.2V9h-9.88v29.85h-7.51V9h-9.82Zm34.89 11.52c0 2.41.54 4.5 1.61 6.29a11.33 11.33 0 0 0 10.08 5.55c2.57 0 4.77-.5 6.58-1.47a15.88 15.88 0 0 0 4.59-3.56v8.48a18.23 18.23 0 0 1-4.85 2.78c-1.75.66-3.96 1-6.63 1-2.82 0-5.43-.46-7.83-1.37a18.8 18.8 0 0 1-6.16-3.93 17.7 17.7 0 0 1-4.08-6.02 19.96 19.96 0 0 1-1.46-7.75c0-2.82.49-5.4 1.46-7.75a17.7 17.7 0 0 1 10.24-9.89c2.4-.94 5-1.41 7.83-1.41 2.67 0 4.88.33 6.63 1 1.73.62 3.35 1.54 4.85 2.77v8.48a14.76 14.76 0 0 0-4.6-3.56c-1.8-.98-4-1.47-6.57-1.47-2.09 0-4.02.49-5.8 1.47-1.77.94-3.2 2.3-4.28 4.08a11.71 11.71 0 0 0-1.61 6.28ZM198.63 2.2h7.51v13.72h17.02V2.2h7.52v36.65h-7.52V22.77h-17.02v16.08h-7.51V2.2Zm39.86 33.5a4.17 4.17 0 0 1 4.28-4.23 4.17 4.17 0 0 1 4.28 4.24c0 1.15-.4 2.16-1.2 3.03a4.07 4.07 0 0 1-3.08 1.26 4.07 4.07 0 0 1-3.08-1.26 4.36 4.36 0 0 1-1.2-3.03Zm30.21-3.82 3.92-11.36h4.39l-7.68 19.35-5.76-11.96-5.77 11.96-7.68-19.35h4.42l3.94 11.36 5.09-12.27 5.14 12.27Zm9.67-7.95v-3.4h13.6v3.4h-4.94v14.92h-3.76V23.93h-4.9Zm15.71-3.41h10.6v3.3h-6.94v4.09h6.68v3.14h-6.68v7.8h-3.66V20.52ZM0 23.93v-3.4h13.6v3.4H8.67v14.92H4.9V23.93H0Zm15.72-3.41h6.16c1.44 0 2.67.26 3.68.76a5.4 5.4 0 0 1 2.35 2.04c.54.88.8 1.9.8 3.07 0 1.29-.32 2.4-.99 3.35a5.57 5.57 0 0 1-2.87 2.01l4.96 7.1h-4.46l-4.26-6.65h-1.61v6.65h-3.76V20.52Zm5.92 3.25h-2.16v5.44h2.16c.98 0 1.75-.23 2.33-.7a2.5 2.5 0 0 0 .86-2.02c0-.87-.29-1.54-.86-2.01a3.55 3.55 0 0 0-2.33-.71Zm20.42-3.25h4.3l-6.29 10.74v7.59h-3.83v-7.57l-6.3-10.76h4.31l3.9 7.39 3.9-7.39Z"
              />
            </g>
            <defs>
              <filter
                id="a"
                width="328.68"
                height="64"
                x="-12"
                y="-12"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_3:83"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_3:83"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div class="bg" style="position: absolute; right: 0">
        <img
          src="{{baseUrl}}/img/hello-world/linkPreviewBg.png"
        />
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
    const slug = req.query.slug.toString();
    const response = await fetch(`${baseUrl}/api/post/${slug}`);
    const post = (await response.json()) as any;

    if (post === null) {
      return res.status(404).send("post not found");
    }

    const html = HTML_TEMPLATE.replace("{{baseUrl}}", baseUrl)
      .replace("{{title}}", post.title)
      .replace("{{description}}", post.description)
      .replace("{{viewsCount}}", post.viewsCount.toString())
      .replace("{{createdAt}}", dayjs(post.createdAt).format("DD MMM, YYYY"));

    const image = await captureScreenshot(html);

    res.setHeader("Content-type", "image/png");
    res.setHeader("Cache-Control", "s-maxage=86400");
    res.send(image);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
};

export default handler;
