import React from "react";
import GlobalButton from "./GlobalButton";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router"; // Import useRouter

import {
  AppBar,
  CssBaseline,
  Paper,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import logo from "./img/logo.png";
import Image from "mui-image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Navbar from "./navbar";
import { parentPort } from "worker_threads";

// const StyledLink = styled(Link)({
//   color: "#564C4A",
//   textshadow: "0px 0px 10px black",
//   textDecoration: "none",
// });
const LanguageButton = styled.button({
  color: "#564C4A",
  textshadow: "0px 0px 10px black",
  textDecoration: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
});

// const useStyles = makeStyles({
//   link: {
//     color: "#564C4A",
//     textshadow: "0px 0px 10px black",
//     textDecoration: "none",
//   },
// });

export default function Header(props: any) {
  const router = useRouter(); // Use useRouter
  const handleLanguageChange = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <>
      <Container sx={{ maxWidth: "85%" }}>
        <Grid container md={12} lg={12} xl={12}>
          <Grid item md={4}>
            <Box sx={{ pt: "20px", pb: "20px" }}>
              <LanguageButton
                // href="/" locale="zh"
                onClick={() => handleLanguageChange("zh")} // Add onClick handler
              >
                中
              </LanguageButton>{" "}
              |{" "}
              <LanguageButton
                onClick={() => handleLanguageChange("en")} // Add onClick handler
              >
                Eng
              </LanguageButton>
            </Box>
            <Box>
              <GlobalButton
                content="MIGRATION MAP"
                cssName={styles.comButton}
                url={""}
              ></GlobalButton>
            </Box>
          </Grid>
          <Grid item md={1.5}></Grid>
          <Grid item md={1}>
            <Image src={logo.src} height="110px" width="114px"></Image>
          </Grid>
          <Grid item md={1.5}></Grid>
          <Grid item md={2.5}></Grid>
          <Grid item md={1.5}>
            <Box sx={{ pt: "20px", pb: "20px" }}>
              <b>
                <GlobalButton
                  content="CONTACT US"
                  cssName={styles.comButton}
                  url={""}
                ></GlobalButton>
              </b>
              <Box>
                <InstagramIcon fontSize="small" />
                <FacebookIcon fontSize="small" />
                <Typography className={styles.lowFontCol1}>
                  (852) - 2813 8778
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
