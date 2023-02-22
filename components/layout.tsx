
import Footer from "./footer";
import { CommonPageProps } from "@/interfaces/common";
import Head from "next/head";
import React from "react";
import StickyButton from "./stickyButton";
import styles from "@/styles/Home.module.css";
import Header from "./header";
import Navbar from "./navbar";
import { Example } from "./slider";
import { Box } from "@mui/system";
import { useScrollTrigger } from "@mui/material";


export default function Layout({ children }: CommonPageProps) {
  return (
    <Box >
      <Head>
        <title>Wild Senses - Home</title>
      </Head>
      <Box sx={{ position: "fixed",  zIndex: "100000" }}>
      
      <Header/>
     
      <Box sx={{ position: "absolute"}}>
      <Navbar/>
      </Box>
      </Box>
      <Box sx={{ top: "0", zIndex: "1" }}>
      <Example></Example>

    
      <main>{children}</main>
      </Box>
      <Footer />
    </Box>
  );
}
