import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout";
import HomePage from "./home/HomePage";
import AboutADayAtSafari from "./about/aboutADayAtSafari";
import WhatTimeOfYear from "./about/WhatTimeOfYear";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />  
        <WhatTimeOfYear></WhatTimeOfYear>
      </Layout>
    </React.Fragment>
  );
};

export default appWithTranslation(App);
