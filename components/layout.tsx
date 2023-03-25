import Footer from "@/components/Footer";
import { CommonPageProps } from "@/interfaces/common";
import Head from "next/head";
import React from "react";
import StickyButton from "./stickyButton";
import styles from "@/styles/Home.module.css";
import Header from "./header";
import Navbar from "./navbar";
import { Box } from "@mui/system";
import { Slide, styled, useScrollTrigger } from "@mui/material";
import ImgSlider from "./slider";


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const FixedBox = styled(Box)({
  position: "fixed",
  top:'0',
  width: '100%',
  zIndex: '9999',
});

export default function Layout({ children }: CommonPageProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Head>
        <title>Wild Senses - Home</title>
      </Head>
      <body>
        <FixedBox>
            <Header />
            <Navbar />
        </FixedBox>
        <Box sx={{ top: "0", zIndex: "1" }}>
          <ImgSlider></ImgSlider>
          <main>{children}</main>
        </Box>
      </body>
      <Footer />
    </Box>
  );
}
