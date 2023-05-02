import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { appWithTranslation } from "next-i18next";
import { Box } from "@mui/system";
import Footer from "@/components/footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Box>
      <Head>
        <title>Wild Senses - Home</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </Box>
  );
};

export default appWithTranslation(App);
