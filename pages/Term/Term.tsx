import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import styles from "../../styles/Home.module.css";
import BigTitle from "@/components/BigTitle";
import FooterCard from "@/components/FooterCard";
import JourneyCard from "@/components/JourneyCard";
import TermAConItem from "../news/components/TermAConItem";
import BigDivider from "@/components/BigDivider";
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

const termsItem = [
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    url: "",
    title: "Disclaimer - Privacy Policy",
    content:
      "Important information regarding our company policy and booking terms.",
  },
];

export default function Term() {
  return (
    <Box>
      <BigTitle content="TERMS AND CONDITION"></BigTitle>
      <Container>
        <Grid container md={12} sx={{ pt: "30px" }}>
          {termsItem.map((item) => (
            <TermAConItem
              img={item.img}
              url={item.url}
              title={item.title}
              content={item.content}
            ></TermAConItem>
          ))}
        </Grid>
      </Container>
      <Container sx={{ maxWidth: "85%" }}>
        <Box className={styles.item15}>
          <BigDivider></BigDivider>
        </Box>
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
                  styleClass={""}
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
