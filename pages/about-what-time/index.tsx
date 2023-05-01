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
import WhatTimeContent from "../about/components/WhatTimeContent";


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

const contents = [
  {
    img: "https://www.wildsensesholidays.com/images/about/wtpf/pic03.jpg",
    title: "Winter (Eastern Africa Jun-Oct, Southern Africa May-Sep)",
    content:
      "• Very few rainfalls <br>• Less and smaller waterholes, wildlife are more concentrated <br>•Easier to spot animals with less vegetation<br>• Higher ratesbr>• Landscape is more yellowish in dry months",
  },
];

const AboutWhatTime = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
       <AboutFrame>
        <Box className={styles.item15}>
          <Box className={styles.p_right}>
            <Box className={styles.h1_title}>
              <Grid justifyContent="top" md={12}>
                {" "}
                <Typography className={styles.big_title_font}>
                  What time of year is the best for African safari?
                </Typography>
              </Grid>
            </Box>
            <Box className={styles.h1_about}>
              <Grid justifyContent="top" md={12}>
                <Typography className={styles.h1_about_right}>
                  Southern African safari countries (Botswana, Zimbabwe, Zambia
                  and South Africa)
                </Typography>
                <Typography className={styles.p2_content}>
                  Summer Nov - Mar
                </Typography>
                <Typography className={styles.p2_content}>
                  Winter May - September
                </Typography>
                <Typography className={styles.p2_content}>
                  Rainfall Nov – Mar
                </Typography>
              </Grid>
            </Box>
            <Box className={styles.h1_about}>
              <Grid justifyContent="top" md={12}>
                <Typography className={styles.p2_content}>
                  The rainy or “green” season offers benefits such as herbivores
                  having their babies, lush green landscapes and dramatic skies.
                  Most predators also switch to hunting the young animals at
                  this time, for those who want to see the predator-prey
                  interactions, the summer months might be your ideal option and
                  it’s generally also a better season for bird watching.
                  However, there is always a risk of a missed game drive in
                  rainy season, you could drive right past a sleeping pride of
                  seven Lions in the bush and fail to spot them.
                </Typography>
              </Grid>
            </Box>
            <Box>
              <Grid justifyContent="top" md={12}>
                <Typography className={styles.h1_about_right}>
                  Summary by Seasons :
                </Typography>
              </Grid>
            </Box>

            {contents.map((con) => (
              <WhatTimeContent
                img={con.img}
                title={con.title}
                content={con.content}
              ></WhatTimeContent>
            ))}
          </Box>
        </Box>
      </AboutFrame>
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default AboutWhatTime;
