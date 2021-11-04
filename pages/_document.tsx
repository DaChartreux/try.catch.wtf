import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css";

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

const renderStatic = (html: string) => {
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const { css, ids } = renderStatic(page.html);
    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </>
      ),
    };
  }

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
