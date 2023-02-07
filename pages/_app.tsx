import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout";
import HomePage from "./home/HomePage";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />  <HomePage></HomePage>
      </Layout>
    </React.Fragment>
  );
};

export default appWithTranslation(App);
