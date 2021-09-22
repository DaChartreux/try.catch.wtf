import React from "react";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "@styles/theme";

import "../styles/globals.css";

const AppThemeProvider = dynamic(
  () => import("@components/ui/AppThemeProvider"),
  { ssr: false }
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppThemeProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppThemeProvider>
  );
};

export default App;
