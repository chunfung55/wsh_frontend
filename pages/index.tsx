// import Head from "next/head";
// import Image from "next/image";
import React from "react";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchAPI } from "@/lib/api";
import HomePage from "./home/HomePage";

const inter = Inter({ subsets: ["latin"] });

import ImgCard from "@/components/ImgCard";
import Container from "@mui/material/Container";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import styles from "@/styles/Home.module.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ImgFrame from "@/components/ImgFrame";
import BigTitle from "@/components/BigTitle";
import NavLink from "@/components/NavLink";
import dynamic from "next/dynamic";
import { orange } from "@mui/material/colors";
import slogan from "./img/slogan_home1_en.png";
import africa from "./img/africa.png";
import helicopter from "./img/helicopter.png";
import phone from "./img/phone.png";

import Image from "mui-image";
import CardSlider from "@/components/CardSlider";
import { useRouter } from "next/router";
import Layout from "@/components/layout";

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
const months = ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"];

const travelIdeas = [
  {
    imgLink: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Giraffe Manor & Kenya Fly-In Safari",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    location: "sabi sands, Victoria Falls, Sossusvlei",
    night: "9 Nights",
    price: "From HKD 47,780/adult",
  },
  {
    imgLink: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Giraffe Manor & Kenya Fly-In Safari",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    location: "sabi sands, Victoria Falls, Sossusvlei",
    night: "9 Nights",
    price: "From HKD 47,780/adult",
  },
  {
    imgLink: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Giraffe Manor & Kenya Fly-In Safari",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    location: "sabi sands, Victoria Falls, Sossusvlei",
    night: "9 Nights",
    price: "From HKD 47,780/adult",
  },
];

const LatestNews = [
  {
    title: "Book Your 2022/23 Antarctica Journey",
    content:
      "There can be no finer way to experience Antarctica than booking a well designed journey with Wild Senses Holidays. Book early with special offer.",
    button: "Read More",
  },
];

const Table = dynamic(() => import("@/components/ImgCard"), {
  ssr: false,
});

// export const getStaticProps: GetStaticProps = async () => {
//   // 在這裡獲取數據，並返回給 Layout 元件使用
//   const data = { title: "Hello, world!" };
//   const navItemsRespose = await fetchAPI("/navigation/render/main-navigation", {
//     populate: "*",
//   });
//   console.log(navItemsRespose);
//   return {
//     props: { navItemsRespose },
//   };
// };

type Props = {
  // Add custom props here
};

const Home = ({ navItems }) =>
  // _props: InferGetStaticPropsType<typeof getStaticProps>
  {
    const router = useRouter();
    const { t } = useTranslation("common");
    return (
      <Layout navItems={navItems}>
        <div className={styles.frame}>
          <div>
            <div className={styles.row}>
              <Container maxWidth="lg">
                <Grid container>
                  <Grid md={2}></Grid>
                  <Grid md={8}>
                    <Image src={slogan.src}></Image>
                  </Grid>
                  <Grid md={2}></Grid>
                </Grid>
              </Container>
            </div>
            <Container maxWidth="lg">
              <Grid container>
                <Grid md={4} className={styles.item15}>
                  <center>
                    <Image src={africa.src} height="80px" width="80px"></Image>
                    <Typography className={styles.h3}>Knowledge</Typography>
                    <Typography className={styles.p}>
                      Every journey is designed by our Travel Specialists with
                      comprehensive knowledge of Africa
                    </Typography>
                  </center>
                </Grid>
                <Grid md={4} className={styles.item15}>
                  <center>
                    {" "}
                    <Image
                      src={helicopter.src}
                      height="80px"
                      width="160px"
                    ></Image>
                    <Typography className={styles.h3}>Knowledge</Typography>
                    <Typography className={styles.p}>
                      Every journey is designed by our Travel Specialists with
                      comprehensive knowledge of Africa
                    </Typography>
                  </center>
                </Grid>
                <Grid md={4} className={styles.item15}>
                  <center>
                    {" "}
                    <Image src={phone.src} height="80px" width="68px"></Image>
                    <Typography className={styles.h3}>Knowledge</Typography>
                    <Typography className={styles.p}>
                      Every journey is designed by our Travel Specialists with
                      comprehensive knowledge of Africa
                    </Typography>
                  </center>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <Box className={styles.frame_grey}>
          <Box className={styles.container_fluid}>
            <Container>
              <BigTitle content="TRAVEL IDEAS BY MONTHS"></BigTitle>
            </Container>
            <center>
              {" "}
              <NavLink labels={months}></NavLink>
            </center>
            <Box className={styles.row}>
              <Container
                sx={{ padding: "0px 15px" }}
                maxWidth={false}
              ></Container>
            </Box>
          </Box>
        </Box>
        <BigTitle content="OUR DESTINATIONS"></BigTitle>
        <Container maxWidth="xl">
          <Grid
            xs={12}
            sm={12}
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
              className={styles.pic_title}
            >
              <ArrowRightIcon fontSize="large" sx={{ color: orange[500] }} />
              AFRICA
            </Typography>
          </Grid>
        </Container>
        <Container>
          <ImageList cols={4} gap={0}>
            {itemData.map((item) => (
              <ImgFrame
                key={item.id}
                img={item.img}
                title={item.title}
              ></ImgFrame>
            ))}
          </ImageList>
        </Container>
        <div className={styles.frame_grey}>
          <div className={styles.container_fluid}>
            <Container>
              <BigTitle content="LATEST NEWS"></BigTitle>
            </Container>
            <div className={styles.row}>
              <Container sx={{ padding: "0px 15px" }} maxWidth={false}>
                <Grid
                  xs={12}
                  sm={12}
                  container
                  spacing={0}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ padding: "0px 15px" }}
                >
                  {travelIdeas.map((travelIdea) => (
                    <Grid md={4}></Grid>
                  ))}
                </Grid>
              </Container>
            </div>
          </div>
        </div>
        <BigTitle content="INSTA MOMENTS"></BigTitle>
        <br></br>
        <ImageList cols={4} gap={0}>
          {itemData.map((item) => (
            <ImgFrame
              key={item.id}
              img={item.img}
              title={item.title}
            ></ImgFrame>
          ))}
        </ImageList>
      </Layout>
    );
  };

// export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? "en", ["common"])),
//   },
// });

export async function getStaticProps() {
  const [navItemsRespose] = await Promise.all([
    fetchAPI("/navigation/render/main-navigation", {
      populate: "*",
    }),
  ]);
  let mainMeuns = navItemsRespose.filter((obj) => obj?.parent == null);
  mainMeuns = mainMeuns.map((obj) => ({ ...obj, submenu: [] }));
  navItemsRespose.forEach((element) => {
    console.log(element);
    if (element?.parent) {
      let index = 0;
      mainMeuns.forEach((mainMeun) => {
        if (mainMeun.id == element.parent.id) {
          mainMeuns[index].submenu.push(element);
        }
        index++;
      });
    }
  });
  console.log("mainMeuns", mainMeuns);
  return {
    props: {
      navItems: mainMeuns,
    },
  };
}

export default Home;
