import React from "react";
import Navbar from "./navbar";
import GlobalButton from "./GlobalButton";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import { CssBaseline, Slide, useScrollTrigger } from "@mui/material";
import { relative } from "node:path/win32";
import ChipButton from "./ChipButton";
import StickyButton from "./stickyButton";
import logo from "./img/logo.png";
import Image from "mui-image";
import { Props } from "next/script";

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

export default function Header(props:any) {
  
  return (
    <HideOnScroll {...props}>
    <Box sx={{ position: "relative", width:"100vw", zIndex: "100000" }}>
        <Container maxWidth="lg" >
          <Grid container>
            <Box className={styles.left}>
              <Box>
                  <a href="">中</a> | <a href="">Eng</a>
              </Box>
              <Box>
                <GlobalButton name="MIGRATION MAP" cssClass="comButton"></GlobalButton>
              </Box>
            </Box>
            <Box className={styles.center}>
            <Image src={logo.src} height="110px" width="114px"></Image>
            </Box>
            <Box className={styles.right}>
              <Box>
                <GlobalButton name="CONTACT US" cssClass="comButton"></GlobalButton>
              </Box>
              <Box>
                <Typography className={styles.lowFontCol1}>
                  (852) - 2813 8778
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Container>
</Box>
</HideOnScroll>
  );
};
