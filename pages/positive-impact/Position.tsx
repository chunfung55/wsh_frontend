import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import BigTitle from "@/components/BigTitle";
import FooterCard from "@/components/FooterCard";
import Image from "mui-image";
import image1 from "@/components/img/Bwindi_lodge+staff(1).jpg";

export default function Position() {
  return (
    <Box>
      <BigTitle content="POSITIVE IMPACT"></BigTitle>
      <Box sx={{ pb: "100px" }}>
        <Container maxWidth="lg">
          <Grid container md={12}>
            <Grid item md={12}>
              <Box className={styles.item15}>
                <Typography className={styles.position_font}>
                  Wildlife in danger…….result of poaching!<br></br>
                  The African rhino is under serious threat from poachers who
                  have intensified their search of rhino for their horns since
                  2007, driven by growing market demands in Asia. Since 2008
                  Africa has lost over 3000 rhinos - a figure that, despite so
                  much effort, increases daily. Elephants, being targeted for
                  their tusks, as well as more other species in African
                  savannah, are facing the same risks. South Africa – home to
                  more than 80% of Africa’s rhino populations – is losing
                  hundreds of rhinos each year. In this country alone:
                  <br></br>
                  <br></br>
                  <br></br>
                  333 rhinos were killed in 2010 448 rhinos were killed in 2011
                  668 rhinos were killed in 2012 1004 rhinos were killed in 2013
                  1215 rhinos were killed in 2014
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={styles.item15}>
                <img src={image1.src}></img>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box className={styles.item15}>
                <img src={image1.src}></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <FooterCard></FooterCard>
    </Box>
  );
}
