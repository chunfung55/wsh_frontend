import React from "react";
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

import AboutFrame from "./components/AboutFrame";
import WhatTimeContent from "./components/WhatTimeContent";
import ImgFrame from "@/components/ImgFrame";

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

export default function WhatIsBig5() {
  return (
    <Box>
      <AboutFrame>
        <Box className={styles.item15}>
          <Box className={styles.p_right}>
            <Box className={styles.h1_title}>
              <Grid justifyContent="top" md={12}>
                {" "}
                <Typography className={styles.big_title_font}>
                  What is the Big 5?
                </Typography>
              </Grid>
            </Box>
            <Box className={styles.h1_about}>
              <Grid justifyContent="top" md={12}>
                <Typography className={styles.p_right}>
                  The big five is a term originally used by the "Great White
                  Hunters" in Africa during the 19th century to refer to the
                  five most dangerous prey animals to hunt: Lion, Leopard,
                  Elephant, Buffalo, and Rhinoceros.
                </Typography>
                <br></br>
              </Grid>
              <Grid justifyContent="top" md={12}>
                <Typography className={styles.p_right}>
                  The ‘Big 5’ could be a must-see on everyone’s list but African
                  safaris are about more than checking off the Big Five. There
                  are so many other incredible animals in Africa, each with
                  interesting behaviors of their own.
                </Typography>
              </Grid>
              <Grid container md={12}>
                <Grid md={1}></Grid>
                <Grid justifyContent="top" md={10}>
                  <ImageList cols={3} gap={0}>
                    {itemData.map((item) => (
                      <ImgFrame img={item.img} title={item.title}></ImgFrame>
                    ))}
                  </ImageList>
                </Grid>
                <Grid md={1}></Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </AboutFrame>
    </Box>
  );
}
