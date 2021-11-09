import React from "react";
import dynamic from "next/dynamic";
import { AnimateSharedLayout } from "framer-motion";

import GlobalTheme from "@styles/GlobalTheme";

import type { AppPropsWithLayout } from "@typings/app";
import { AppThemeProvider } from "context/AppThemeContext";

const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GlobalTheme />
      <AppThemeProvider>
        <AnimateSharedLayout>
          <Navbar />
          {getLayout(<Component {...pageProps} />)}
          <Footer />
        </AnimateSharedLayout>
      </AppThemeProvider>
    </>
  );
};

export default App;
