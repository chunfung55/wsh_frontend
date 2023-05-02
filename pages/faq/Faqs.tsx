import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import PageFrame from "@/components/PageFrame";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BigTitle from "@/components/BigTitle";
import FooterCard from "@/components/FooterCard";
import JourneyCard from "@/components/JourneyCard";

const faqs = [
  {
    question: "When should I visit Africa ? ",
    answer:
      "Africa is a vast continent and most safari destinations offer amazing experience all year round. However there are some destinations that tourists should avoid in certain months, please visit Destinations page on our website for more informaiton.",
  },
  {
    question: "When should I visit Africa ? ",
    answer:
      "Africa is a vast continent and most safari destinations offer amazing experience all year round. However there are some destinations that tourists should avoid in certain months, please visit Destinations page on our website for more informaiton.",
  },
];
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
export default function Faqs() {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <BigTitle content="FREQUENTLY ASKED QUESTIONS"></BigTitle>
      <PageFrame>
        <Box className={styles.item15}>
          <Box sx={{ p: "10px 20px" }}></Box>
          <Box sx={{ p: "20px 0px", m: "20px 0px" }}></Box>
          <Box className={styles.p_right}>
            {faqs.map((faq) => (
              <>
                <Grid md={12} className={styles.article}>
                  <Divider />
                  <Button
                    onClick={() => setShow((prev) => !prev)}
                    className={styles.fnq_span}
                    style={{ textTransform: "none" }}
                  >
                    Q {faq.question} <ArrowDropDownIcon fontSize="medium" />
                  </Button>
                  {show && (
                    <Box sx={{ p: "10px 20px" }}>
                      <Typography className={styles.p}>{faq.answer}</Typography>
                    </Box>
                  )}
                </Grid>
              </>
            ))}
          </Box>
        </Box>
      </PageFrame>

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
