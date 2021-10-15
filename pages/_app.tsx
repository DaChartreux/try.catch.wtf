import React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { AnimateSharedLayout } from "framer-motion";

import GlobalTheme from "@styles/GlobalTheme";

const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });

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
      <Navbar />
      <GlobalTheme />
      <AnimateSharedLayout>
        {getLayout(<Component {...pageProps} />)}
      </AnimateSharedLayout>
    </>
  );
};

export default App;
