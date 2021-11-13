import React from "react";
import dynamic from "next/dynamic";
import { AnimateSharedLayout } from "framer-motion";

import type { AppPropsWithLayout } from "@typings/app";
import { AppThemeProvider } from "context/AppThemeContext";

import "@styles/global.css";

const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
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
