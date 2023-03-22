import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout";
import HomePage from "./home/HomePage";
import WhatTimeOfYear from "./about/WhatTimeOfYear";
import WhatIsBig5 from "./about/WhatIsBig5";
import TheGreatMigration from "./about/TheGreatMigration";
import SafariAcco from "./about/SafariAcco";
import Kenya from "./destin/Kenya";
import Faq from "./travelInfo/Faqs";
import LatestNews from "./travelInfo/LatestNews";
import { fetchAPI } from "@/lib/api";

import Term from "./travelInfo/Term";
import ExtraMoment from "./aboutUs/ExtraMoment";
import WhoWeAre from "./aboutUs/WhoWeAre";
import Position from "./aboutUs/Position";
const App = ({ Component, pageProps }: AppProps) => {
  console.log("in app", Component);
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
        {/* <Position></Position> */}
      </Layout>
    </React.Fragment>
  );
};

export default appWithTranslation(App);
