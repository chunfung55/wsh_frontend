import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { CommonPageProps, CommonGetStaticProps } from "@/interfaces/common";
import { commonGetStaticPropsContext } from "@/lib/api";
import { Box, Grid, Typography } from "@mui/material";
import AboutFrame from "../about/components/AboutFrame";
import styles from "../../styles/Home.module.css";
import DayAtSafiContent from "../about/components/DayAtSafiContent";

const contents = [
  {
    title: "Morning Game Drive",
    content:
      "As dawn breaks over the African bush, a gentle tap on your door will wake you to the pleasures of a new day. Your ranger will discuss what you hope to see that day over fragrant tea or coffee and morning biscuits or muffins. Set out in an open 4x4 safari vehicle in the company of a ranger and tracker team, who will attempt to track your favorite animals.",
    imgUrl: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  },
  {
    title: "Morning Game Drive",
    content:
      "As dawn breaks over the African bush, a gentle tap on your door will wake you to the pleasures of a new day. Your ranger will discuss what you hope to see that day over fragrant tea or coffee and morning biscuits or muffins. Set out in an open 4x4 safari vehicle in the company of a ranger and tracker team, who will attempt to track your favorite animals.",
    imgUrl: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  },
];

const AboutBestForSafari = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("safari");
  return (
    <Layout {...props}>
      <AboutFrame>
        <Box className={styles.h1_title}>
          <Grid justifyContent="top" md={12}>
            {" "}
            <Typography className={styles.big_title_font}>
              {t("whatTimetitle")}
            </Typography>
          </Grid>
        </Box>
        <Box className={styles.h1_about}>
          <Grid justifyContent="top" md={12}>
            {" "}
            <Typography className={styles.h3_about}>
              {t("whatTimeP1")}
            </Typography>
            <Typography className={styles.h1_about}>
              {t("whatTimeC1")}
            </Typography>
            <br />
            <Typography className={styles.h3_about}>
              {t("whatTimeP2")}
            </Typography>
            <Typography className={styles.h1_about}>
              {t("whatTimeC2")}
            </Typography>
            <Typography className={styles.h1_about}>
              {t("whatTimeP3")}
            </Typography>
            <br />
          </Grid>
        </Box>
        <Box>
          {contents.map((con) => (
            <Box sx={{ padding: "10px" }}>
              <DayAtSafiContent
                title={con.title}
                content={con.content}
                img={con.imgUrl}
              ></DayAtSafiContent>
            </Box>
          ))}
        </Box>
      </AboutFrame>
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default AboutBestForSafari;
