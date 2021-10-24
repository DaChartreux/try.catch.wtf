import React from "react";
import dynamic from "next/dynamic";
import { AnimateSharedLayout } from "framer-motion";

import GlobalTheme from "@styles/GlobalTheme";

import type { AppPropsWithLayout } from "@typings/app";

const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AnimateSharedLayout>
      <Navbar />
      <GlobalTheme />
      {getLayout(<Component {...pageProps} />)}
      <Footer />
    </AnimateSharedLayout>
  );
};

export default App;
