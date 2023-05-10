import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { getDestinationCategories, getMenu } from "@/services/common";
import { CommonGetStaticProps, NavBarProps } from "@/interfaces/common";
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
import Image from "mui-image";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
];

const AboutGreatMigration = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("safari");
  return (
    <Layout {...props}>
      <AboutFrame>
        <Box className={styles.item15}>
          <Box className={styles.p_right}>
            <Box className={styles.h1_about}>
              <Grid justifyContent="top" md={12}>
                <Typography className={styles.p_right}>
                  <b>{t("greatMigTitle")}</b>
                </Typography>
              </Grid>
              <Grid container md={12}>
                <Grid item={true} justifyContent="top" md={5.5}>
                  <Typography className={styles.p_right} paddingRight="15px">
                  {t("greatMigP1")}
                  </Typography>
                </Grid>
                <Grid item={true} justifyContent="top" md={5.5}>
                  <Typography className={styles.p_right} paddingRight="15px">
                  {t("greatMigP2")}
                  </Typography>
                  <br></br>
                  <Typography className={styles.p_right}>
                  {t("greatMigP1")}
                  </Typography>
                </Grid>
                <Grid item md={1}></Grid>
              </Grid>

              <Grid container md={12}>
                  <Grid item md={11}>
                    <Typography className={styles.p_right}>
                    {t("greatMigP3")}
                    </Typography>
                  </Grid>
                  <Grid md={1}></Grid>
              </Grid>
              <Grid container md={12}>
                  <Grid item md={11}>
                    <Typography className={styles.p_right}>
                    {t("greatMigp3.5")}
                    </Typography>
                  </Grid>
                  <Grid md={1}></Grid>
              </Grid>



              <Grid container md={12}>
                <Grid item={true} justifyContent="top" md={5.25}>
                  <Box className={styles.item15}>
                    <img
                      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                      width="100%"
                    />
                  </Box>
                </Grid>
                <Grid item={true} justifyContent="top" md={5.25}>
                  <Box className={styles.item15}>
                    <img
                      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                      width="100%"
                    />
                  </Box>
                </Grid>
                <Grid item md={1}></Grid>
              </Grid>
              <Box paddingTop="16px">
                <Grid container md={12}>
                  <Grid item md={11}>
                    <Typography className={styles.p_right}>
                    {t("greatMigP4")}
                    </Typography>
                  </Grid>
                  <Grid md={1}></Grid>
                </Grid>
                <Grid container md={12}>
                  <Grid item md={11}>
                    <Typography className={styles.p_right}>
                    {t("greatMigP5")}
                    </Typography>
                  </Grid>
                  <Grid md={1}></Grid>
                </Grid>
                <Grid container md={12}>
                <Grid item={true} justifyContent="top" md={5.25}>
                  <Box className={styles.item15}>
                    <img
                      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                      width="100%"
                    />
                  </Box>
                </Grid>
                <Grid item={true} justifyContent="top" md={5.25}>
                  <Box className={styles.item15}>
                    <img
                      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                      width="100%"
                    />
                  </Box>
                </Grid>
                <Grid item md={1}></Grid>
              </Grid>
                <Grid container md={12}>
                  <Grid item md={11}>
                    <Typography className={styles.p_right}>
                    {t("greatMigP6")}
                    </Typography>
                  </Grid>
                  <Grid md={1}></Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </AboutFrame>
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default AboutGreatMigration;
