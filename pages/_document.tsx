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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
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
