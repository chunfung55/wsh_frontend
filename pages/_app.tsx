import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { AppPropsWithLayout } from "next/app";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>next-i18next Sample</title>
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default appWithTranslation(App);
