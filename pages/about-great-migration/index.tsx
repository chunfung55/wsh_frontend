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
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
      <AboutFrame>
        <Box className={styles.item15}>
          <Box className={styles.p_right}>
            <Box className={styles.h1_about}>
              <Grid justifyContent="top" md={12}>
                <Typography className={styles.p_right}>
                  <b>The Great Migration</b>
                </Typography>
              </Grid>
              <Grid container md={12}>
                <Grid item={true} justifyContent="top" md={5.5}>
                  <Typography className={styles.p_right} paddingRight="15px">
                    One of nature's biggest wildlife spectacles is the
                    wildebeest migration, over two million animals migrate from
                    the Serengeti National Park in Tanzania to the greener
                    pastures of the Masai Mara National Reserve in Kenya during
                    June through to October. The principle players are the 1.5
                    millions wildebeests, with supporting roles from some
                    350,000 Thomson’s gazelle, 200,000 zebra and 12,000 eland.
                  </Typography>
                </Grid>
                <Grid item={true} justifyContent="top" md={5.5}>
                  <Typography className={styles.p_right} paddingRight="15px">
                    The migration has to cross the Mara River in the Masai Mara.
                    This is one of the highlights as the animals try and cross
                    the Mara River and contend with hungry crocodiles.The lions,
                    hyenas, leopards, cheetahs and lesser predators await the
                    annual coming of the migration with eager anticipation.
                  </Typography>
                  <br></br>
                  <Typography className={styles.p_right}>
                    The wildebeest migration follows the year’s annual rainfall
                    so its appearance in Tanzania and Kenya is weather
                    dependent.
                  </Typography>
                </Grid>
                <Grid item md={1}></Grid>
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
                      May/June: Hundreds of thousands of wildebeest are
                      preparing the movement from southern plain to the North.
                      In early June, great chance of seeing large numbers of
                      predator- prey interaction. Lions, spotted hyenas, cheetah
                      and leopard and so on fill the concentration in the
                      Seronera Valley. Lions and spotted hyenas kills daily,
                      while leopard drag the young wildebeest up into the trees,
                      along the south bank of the Grumeti as it runs through the
                      western corridor in late June.
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
