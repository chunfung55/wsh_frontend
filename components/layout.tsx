import Footer from "@/components/footer";
import { CommonPageProps } from "@/interfaces/common";
import React from "react";
import Navbar from "./navbar";
import { Box } from "@mui/system";
import ImgSlider from "./slider";
import { Button, CssBaseline } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function Layout({ children, navItems }: CommonPageProps) {
  return (
    <>
      <CssBaseline />
      <Box sx={{ position: "sticky", zIndex: "100000" }}>
        <Navbar navItems={navItems} />
      </Box>
      <Box sx={{ position: "fixed", zIndex: "100001" ,top:"30%",right:"0%"}}>
      <Button className={styles.comButton_sticky}>content us</Button>
      </Box>
      <Box sx={{ top: "0", zIndex: "1" }}>
        <ImgSlider></ImgSlider>
        <main>{children}</main>
      </Box>
    </>
  );
}
