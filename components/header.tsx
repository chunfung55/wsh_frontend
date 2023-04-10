import React from "react";
import GlobalButton from "./GlobalButton";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

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
      <Container sx={{ maxWidth: "85%" }}>
        <Grid container md={12} lg={12} xl={12}>
          <Grid item md={4}>
            <Box sx={{ pt: "20px", pb: "20px" }}>
              <StyledLink href="">中</StyledLink> |{" "}
              <StyledLink href="">Eng</StyledLink>
            </Box>
            <Box>
              <GlobalButton
                content="MIGRATION MAP"
                cssName={styles.comButton}
                url={""}
              ></GlobalButton>
            </Box>
          </Grid>
          
          <Grid item md={4} >
            <Box  display="flex" justifyContent="center">
            <img
              className={styles.imgFrame}
              src={logo.src}
              loading="lazy"
              height="110px" width="130px"
            />
            </Box>
          </Grid>
         
          <Grid item md={4}>
       
            <Box sx={{ pt: "20px", pb: "20px" }}  display="flex" justifyContent="flex-end">
              <b>
                <GlobalButton
                  content="CONTACT US"
                  cssName={styles.comButton}
                  url={""}
                ></GlobalButton>
              </b>
              
            </Box>
            <Box  display="flex" justifyContent="flex-end">
                <Typography className={styles.lowFontCol1}>
                <Typography ><InstagramIcon fontSize="medium"/>
                <FacebookIcon fontSize="medium"/></Typography>
                   (852) - 2813 8778
                </Typography>
              </Box>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}
