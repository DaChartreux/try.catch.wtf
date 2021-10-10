import React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";

import GlobalTheme from "@styles/GlobalTheme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GlobalTheme />
      <AnimateSharedLayout>
        {getLayout(<Component {...pageProps} />)}
      </AnimateSharedLayout>
    </>
  );
};

export default App;
