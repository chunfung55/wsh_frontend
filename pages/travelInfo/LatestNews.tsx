import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActionArea,
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
import styles from "../../styles/Home.module.css";
import PageFrame from "@/components/PageFrame";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BigTitle from "@/components/BigTitle";
import BigDivider from "@/components/BigDivider";
import FooterCard from "@/components/FooterCard";
import JourneyCard from "@/components/JourneyCard";
import LatestNewsItem from "./components/LatestNewsItem";
const journeys = [
  {
    url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    imgLink: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    name: "Giraffe Manor & Kenya Fly-In Safari",
    btnContent: "From HKD 47,780/adult",
  },
  {
    url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    imgLink: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    name: "Giraffe Manor & Kenya Fly-In Safari",
    btnContent: "From HKD 47,780/adult",
  },
  {
    url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    imgLink: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    name: "Giraffe Manor & Kenya Fly-In Safari",
    btnContent: "From HKD 47,780/adult",
  },
];

const news = [
  {
    url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Book Your 2022/23 Antarctica Journey ",
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    content:
      "There can be no finer way to experience Antarctica than booking a well designed journey with Wild Senses Holidays.",
  },
  {
    url: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Book Your 2022/23 Antarctica Journey ",
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    content:
      "There can be no finer way to experience Antarctica than booking a well designed journey with Wild Senses Holidays.",
  },
];

export default function LatestNews() {
  const [isShown, setIsShown] = useState(false);
  return (
    <Box>
      <Box>
        <BigTitle content="LATEST NEWS"></BigTitle>
        <Box sx={{ pt: "50px" }}>
          <Container sx={{ maxWidth: "85%" }}>
            <Grid container md={12}>
              {news.map((newItem) => (
                <Grid md={6} sm={6} lg={4}>
                  <LatestNewsItem
                    url={newItem.url}
                    title={newItem.title}
                    img={newItem.img}
                    content={newItem.content}
                    style={styles.lates_new_item}
                  ></LatestNewsItem>
                </Grid>
              ))}
            </Grid>
          </Container>
          <BigTitle content="RECOMMENDED JOURNEYS"></BigTitle>
          <Container sx={{ maxWidth: "85%" }}>
            <Grid container md={12} sx={{ pb: "50px" }}>
              {journeys.map((jou) => (
                <Grid item md={4}>
                  <Box className={styles.item15}>
                    <JourneyCard
                      url={jou.url}
                      imgLink={jou.imgLink}
                      name={jou.name}
                      btnContent={jou.btnContent}
                    ></JourneyCard>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <FooterCard></FooterCard>
      </Box>

      <BigTitle content="RECOMMENDED JOURNEYS"></BigTitle>
      <Container sx={{ maxWidth: "85%" }}>
        <Grid container md={12} sx={{ pb: "50px" }}>
          {journeys.map((jou) => (
            <Grid item md={4}>
              <Box className={styles.item15}>
                <JourneyCard
                  url={jou.url}
                  imgLink={jou.imgLink}
                  name={jou.name}
                  btnContent={jou.btnContent}
                ></JourneyCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterCard></FooterCard>
    </Box>
  );
}
