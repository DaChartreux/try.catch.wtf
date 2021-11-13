import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import { APP_THEME } from "@context/AppThemeContext";

const initialTheme = `
!(function() {
  function getTheme() {
    const theme = window.localStorage.getItem('__APP_THEME__');
    if (theme) {
      return theme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? '${APP_THEME.DARK}' : '${APP_THEME.LIGHT}';
  }
  const theme = getTheme();
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}())`;

export default class Document extends NextDocument {
  render() {
    return (
      <Html style={{ colorScheme: "dark" }}>
        <Head>
          <link
            rel="preload"
            href="/fonts/Jost/Jost-VF.woff2"
            crossOrigin="anonymous"
            as="font"
            type="font/woff2"
          />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: initialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
