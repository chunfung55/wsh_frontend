import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { CommonPageProps, CommonGetStaticProps } from "@/interfaces/common";
import { commonGetStaticPropsContext } from "@/lib/api";
import { Box, Container, Grid, List, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import AboutFrame from "../about/components/AboutFrame";
import Image from "mui-image";

const pages = [
  "A Day At Safari",
  "What time of year is the best for African safari",
  "what is the Big 5?",
  "The Great Migration",
];
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const AboutSafariAccommodation = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
        <AboutFrame>
       
            <Box className={styles.h1_title}>
              <Grid justifyContent="top" md={12}>
                {" "}
                <Typography className={styles.big_title_font}>
                  Safari Accommodation
                </Typography>
              </Grid>
            </Box>
            <Box className={styles.h1_about}>
              <Grid justifyContent="top" md={12}>
                {" "}
                <Typography className={styles.p}>
                  Whether travelling as a couple, a family or on your own and to
                  satisfy individual needs, our recommended properties range
                  from luxury to more affordable options.
                </Typography>
              </Grid>
            </Box>
            <Grid container>
              <Grid item md={4.75}>
              <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" width="100%" height="auto"  loading="lazy"/>
              
              </Grid>
              <Grid item md={2.5}></Grid>
              <Grid item md={3.5}>
                <Box className={styles.h1_title}>
                  <Typography className={styles.small_title_font}>
                    Premier Camps
                  </Typography>
                </Box>
                <Typography className={styles.p_right}>
                  These camps combine exclusive luxury and superbly designed
                  architecture with the warm comforts of home and personal
                  service.
                </Typography>
              </Grid>
              <Grid item md={1.25}></Grid>
            </Grid>
            <Box  padding="50px 0px 0px">
            <Grid container>
            <Grid item md={4.75}>
              <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" width="100%" height="auto"  loading="lazy"/>
              
              </Grid>
              <Grid item md={2.5}></Grid>
              <Grid item md={3.5}>
                <Box className={styles.h1_title}>
                  <Typography className={styles.small_title_font}>
                    Premier Camps
                  </Typography>
                </Box>
                <Typography className={styles.p_right}>
                  These camps combine exclusive luxury and superbly designed
                  architecture with the warm comforts of home and personal
                  service.
                </Typography>
              </Grid>
              <Grid item md={1.25}></Grid>
              </Grid>
              </Box>
      </AboutFrame>
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default AboutSafariAccommodation;
