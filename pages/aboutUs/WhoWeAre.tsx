import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import styles from "@/styles/Home.module.css";
import BigTitle from "@/components/BigTitle";
import FooterCard from "@/components/FooterCard";
import Image from "mui-image";
import BigDivider from "@/components/BigDivider";
import slogan1 from "@/components/img/slogan_about1_en.png";
import slogan2 from "@/components/img/slogan_about2_en.png";
import slogan3 from "@/components/img/slogan_about3_en.png";
export default function WhoWeAre() {
  return (
    <Box>
      <Image
        src={slogan1.src}
        width="100%"
        height="auto"
        vertical-align="middle"
      ></Image>
      <Box sx={{ pt: "100px" }}>
        <BigTitle content="OUR DESTINATIONS"></BigTitle>
      </Box>
      <Box sx={{ pb: "100px" }}>
        <Container maxWidth="false" sx={{ maxWidth: "85%" }}>
          <Grid md={12} container>
            <Grid md={12} item>
              <Box className={styles.item15}>
                <Image
                  src={slogan2.src}
                  width="100%"
                  height="auto"
                  vertical-align="middle"
                  style={{ maxWidth: "1200px" }}
                ></Image>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ pt: "100px" }}>
          <BigTitle content="OUR TRAVEL SPECIALISTS"></BigTitle>
        </Box>
        <Container maxWidth="false" sx={{ maxWidth: "85%" }}>
          <Grid md={12} container>
            <Grid md={12} item>
              <Box className={styles.item15}>
                <Image
                  src={slogan3.src}
                  width="100%"
                  height="auto"
                  vertical-align="middle"
                  style={{ maxWidth: "1200px" }}
                ></Image>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <FooterCard></FooterCard>
    </Box>
  );
}
