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

export default function LatestNews() {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <BigTitle content="LATEST NEWS"></BigTitle>

      <BigTitle content="RECOMMENDED JOURNEYS"></BigTitle>
      <Container maxWidth="false" sx={{ maxWidth: "85%" }}>
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
