import React from "react";
import Navbar from "./navbar";
import GlobalButton from "./GlobalButton";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { Example } from "./slider";
import { CssBaseline } from "@mui/material";
import { relative } from "node:path/win32";
import ChipButton from "./ChipButton";
import StickyButton from "./stickyButton";

const Header = () => {
  return (
    <div>
      <CssBaseline />

      <div className={styles.page}>
        <Container maxWidth="lg">
          <Grid item xs={12} sm container className={styles.header}>
            <div className={styles.left}>
              <div>
                <a href="">中</a> | <a href="">Eng</a>
              </div>
              <div>
                <GlobalButton name="MIGRATION MAP" style="comButton"></GlobalButton>
              </div>
            </div>

            <div className={styles.center}>
              <Box
                sx={{
                  width: 141,
                  height: 110,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              ></Box>
            </div>

            <div className={styles.right}>
              <div>
                <GlobalButton name="CONTACT US" style="comButton"></GlobalButton>
              </div>
              <div>
                <Typography className={styles.lowFontCol1}>
                  (852) - 2813 8778
                </Typography>
              </div>
            </div>
          </Grid>
        </Container>
        <StickyButton className={styles.upFontCol1}>CONTACT US</StickyButton>
        <Navbar />

        <Example></Example>
      </div>
    </div>
  );
};
export default Header;
