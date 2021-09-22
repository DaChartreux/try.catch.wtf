import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import "../styles/globals.css";

const AppThemeProvider = dynamic(
  () => import("@components/ui/AppThemeProvider"),
  { ssr: false }
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
};

export default App;
