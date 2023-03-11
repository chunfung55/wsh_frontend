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
import styles from "@/styles/Home.module.css";
import AboutFrame from "./components/AboutFrame";
import DayAtSafiContent from "./components/DayAtSafiContent";

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

export default function AboutADayAtSafari() {
  return (
    <Box>
      <AboutFrame>
        <Box className={styles.item15}>
          <Box className={styles.item15}>
            <Box className={styles.h1_title}>
              <Grid justifyContent="top" md={12}>
                {" "}
                <Typography className={styles.big_title_font}>
                  A day at Safari
                </Typography>
              </Grid>
            </Box>
            <Box className={styles.h1_about}>
              <Grid justifyContent="top" md={12}>
                {" "}
                <Typography className={styles.p2}>
                  Your days are well-designed to thrill you with intimate
                  wildlife encounters and ensure that guests enjoy a comfortable
                  experience. Here is what you shall expect a day to be in a
                  safari camp.
                </Typography>
              </Grid>
            </Box>
          </Box>
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
    </Box>
  );
}
