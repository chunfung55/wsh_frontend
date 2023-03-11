import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import HomePage from "./home/HomePage";
import WhatTimeOfYear from "./about/WhatTimeOfYear";
import WhatIsBig5 from "./about/WhatIsBig5";
import TheGreatMigration from "./about/TheGreatMigration";
import SafariAcco from "./about/SafariAcco";
import Kenya from "./destin/Kenya";
import Faq from "./travelInfo/Faqs";
import LatestNews from "./travelInfo/LatestNews";
import Term from "./travelInfo/Term";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />  
        <Kenya></Kenya> 
      </Layout>
    </React.Fragment>
  );
};

export default appWithTranslation(App);
