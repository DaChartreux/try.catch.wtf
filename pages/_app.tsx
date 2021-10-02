import React from "react";
import type { ReactElement, ReactNode } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { AnimateSharedLayout } from "framer-motion";

import { theme } from "@styles/theme";

import "@styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const AppThemeProvider = dynamic(
  () => import("@components/ui/AppThemeProvider"),
  { ssr: false }
);

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppThemeProvider>
      <ThemeProvider theme={theme}>
        <AnimateSharedLayout>
          {getLayout(<Component {...pageProps} />)}
        </AnimateSharedLayout>
      </ThemeProvider>
    </AppThemeProvider>
  );
};

export default App;
