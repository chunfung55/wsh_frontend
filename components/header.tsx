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
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from "@mui/icons-material/Facebook";

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

const StyledLink = styled(Link)({
  color:"#564C4A",
  textshadow: "0px 0px 10px black",
  textDecoration: "none",
});


export default function Header(props:any) {
  
  return (
    <HideOnScroll {...props}>
    <Box sx={{ position: "relative", width:"100vw", zIndex: "100000" }}>
        <Container maxWidth="lg" >
          <Grid container>
            <Box className={styles.left}>
              <Box sx={{pt:"20px", pb:"20px"}}>
                  <StyledLink href="" >中</StyledLink> | <StyledLink href="">Eng</StyledLink>
              </Box>
              <Box>
                <GlobalButton content="MIGRATION MAP" cssName={styles.comButton} url={""}></GlobalButton>
              </Box>
            </Box>
            <Box className={styles.center}>
            <Image src={logo.src} height="110px" width="114px"></Image>
            </Box>
            <Box className={styles.right}>
              <Box  sx={{pt:"20px", pb:"20px"}}>
                <GlobalButton content="CONTACT US" cssName={styles.comButton} url={""}></GlobalButton>
              </Box>
              <Box>
              <InstagramIcon fontSize="small" /> <FacebookIcon fontSize="small" />
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
