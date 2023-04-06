import Footer from "@/components/footer";
import { CommonPageProps } from "@/interfaces/common";
import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import { Box } from "@mui/system";
import ImgSlider from "./slider";

export default function Layout({ children, navItems }: CommonPageProps) {
  return (
    <>
      <Box sx={{ position: "fixed", zIndex: "100000" }}>
        <Header />
        <Box sx={{ position: "absolute" }}>
          <Navbar navItems={navItems} />
        </Box>
      </Box>
      <Box sx={{ top: "0", zIndex: "1" }}>
        <ImgSlider></ImgSlider>
        <main>{children}</main>
      </Box>
    </>
  );
}
