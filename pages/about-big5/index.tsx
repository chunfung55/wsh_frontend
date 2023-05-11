import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getDestinationCategories, getMenu } from "@/services/common";
import { CommonPageProps, CommonGetStaticProps } from "@/interfaces/common";
import { commonGetStaticPropsContext } from "@/lib/api";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
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
import styles from "../../styles/Home.module.css";

import AboutFrame from "../about/components/AboutFrame";
import WhatTimeContent from "../about/components/WhatTimeContent";
import ImgFrame from "@/components/ImgFrame";
import ImgFrameSm from "@/components/ImgFrameSm";

const contents = [
  {
    img: "https://www.wildsensesholidays.com/images/about/wtpf/pic03.jpg",
    title: "Winter (Eastern Africa Jun-Oct, Southern Africa May-Sep)",
    content:
      "• Very few rainfalls <br>• Less and smaller waterholes, wildlife are more concentrated <br>•Easier to spot animals with less vegetation<br>• Higher ratesbr>• Landscape is more yellowish in dry months",
  },
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
];

const AboutBig5 = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("safari");
  return (
    <Layout {...props}>
      <AboutFrame>
        <Grid container md={12}>
          <Box className={styles.item15}>
            <Box className={styles.p_right}>
              <Box className={styles.h1_title}>
                <Grid justifyContent="top" md={12}>
                  {" "}
                  <Typography className={styles.big_title_font}>
                    {t("bigFivetitle")}
                  </Typography>
                </Grid>
              </Box>
              <Box className={styles.h1_about}>
                <Grid justifyContent="top" md={12}>
                  <Typography className={styles.p_right}>
                    {t("bigFiveP1")}
                  </Typography>
                  <br></br>
                </Grid>
                <Grid justifyContent="top" md={12}>
                  <Typography className={styles.p_right}>
                    {t("bigFiveP2")}
                  </Typography>
                </Grid>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item md={1.25}></Grid>
                  <Grid item md={9.5}>
                    <ImageList variant="masonry" cols={3} gap={0}>
                      {itemData.map((item) => (
                        <ImgFrame img={item.img} title={item.title}></ImgFrame>
                      ))}
                    </ImageList>
                  </Grid>
                  <Grid item md={1.25}></Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </AboutFrame>
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default AboutBig5;
