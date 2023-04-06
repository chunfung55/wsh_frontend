import React from "react";
import GlobalButton from "./GlobalButton";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import { CssBaseline, Slide, useScrollTrigger } from "@mui/material";
import logo from "./img/logo.png";
import Image from "mui-image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const StyledLink = styled(Link)({
  color: "#564C4A",
  textshadow: "0px 0px 10px black",
  textDecoration: "none",
});

// const useStyles = makeStyles({
//   link: {
//     color: "#564C4A",
//     textshadow: "0px 0px 10px black",
//     textDecoration: "none",
//   },
// });

export default function Header(props: any) {
  return (
    <>
      <Link href={"/zh"}>中</Link>
      <Container maxWidth="lg">
        <Grid container>
          <Box className={styles.left}>
            <Box sx={{ pt: "20px", pb: "20px" }}>
              {/* <StyledLink href={"/zh"}>中</StyledLink> | */}
              <Link href={"/zh"}>中</Link>
              <StyledLink href="/en">Eng</StyledLink>
            </Box>
            <Box>
              <GlobalButton
                content="MIGRATION MAP"
                cssName={styles.comButton}
                url={""}
              ></GlobalButton>
            </Box>
          </Box>
          <Box className={styles.center}>
            <Image src={logo.src} height="110px" width="114px"></Image>
          </Box>
          <Box className={styles.right}>
            <Box sx={{ pt: "20px", pb: "20px" }}>
              <b>
                <GlobalButton
                  content="CONTACT US"
                  cssName={styles.comButton}
                  url={""}
                ></GlobalButton>
              </b>
            </Box>
            <Box>
              <InstagramIcon fontSize="small" />{" "}
              <FacebookIcon fontSize="small" />
              <Typography className={styles.lowFontCol1}>
                (852) - 2813 8778
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
