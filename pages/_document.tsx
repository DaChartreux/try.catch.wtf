import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

const initialTheme = `
!function() {
  function getTheme() {
    const theme = window.localStorage.getItem('__APP_THEME__');
    if (theme) {
      return theme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  const theme = getTheme();
  document.documentElement.classList.remove(
    theme === "light" ? "dark" : "light"
  );
  document.documentElement.classList.add(theme);
}()`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="duration-200 ease-in-out">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="crossorigin"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600;700&display=swap"
            rel="stylesheet"
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
