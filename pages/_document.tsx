import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "@emotion/css";

const initialTheme = `
!(function() {
  function getTheme() {
    const theme = window.localStorage.getItem('__APP_THEME__');
    if (theme) {
      return theme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  const theme = getTheme();
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}())`;

export const renderStatic = async (html: string) => {
  if (html === undefined) {
    throw new Error("did you forget to return html from renderToString?");
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
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
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
          {/* <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          /> */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
            rel="stylesheet"
          /> */}
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
