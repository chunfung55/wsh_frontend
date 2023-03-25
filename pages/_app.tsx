import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { appWithTranslation } from "next-i18next";
import { Box } from "@mui/system";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ImgSlider from "@/components/slider";
import Footer from "@/components/footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Box>
      <Head>
        <title>Wild Senses - Home</title>
      </Head>
      <Component {...pageProps} />
      {/* <Box sx={{ position: "fixed", zIndex: "100000" }}>
          <Header />

          <Box sx={{ position: "absolute" }}>
            <Navbar />
          </Box>
        </Box>
        <Box sx={{ top: "0", zIndex: "1" }}>
          <ImgSlider></ImgSlider>
          <main>
            <Component {...pageProps} />
          </main>
        </Box> */}
      <Footer />
    </Box>
  );
};

export default appWithTranslation(App);
