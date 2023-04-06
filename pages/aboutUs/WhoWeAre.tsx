import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import styles from "@/styles/Home.module.css";
import BigTitle from "@/components/BigTitle";
import FooterCard from "@/components/FooterCard";
import Image from "mui-image";
// import slogan1 from "/images/slogan_about1_en.png";
// import slogan2 from "/images/slogan_about2_en.png";
// import slogan3 from "/images/slogan_about3_en.png";
export default function WhoWeAre() {
  return (
    <Box>
      <Image
        src={"/images/slogan_about1_en.png"}
        width="100%"
        height="auto"
        vertical-align="middle"
      ></Image>
      <Box sx={{ pt: "100px" }}>
        <BigTitle content="OUR DESTINATIONS"></BigTitle>
      </Box>
      <Box sx={{ pb: "100px" }}>
        <Container sx={{ maxWidth: "85%" }}>
          <Grid md={12} container>
            <Grid md={12} item>
              <Box className={styles.item15}>
                <Image
                  src={"/images/slogan_about2_en.png"}
                  width="100%"
                  height="auto"
                  vertical-align="middle"
                  style={{ maxWidth: "1200px" }}
                ></Image>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ pt: "100px" }}>
          <BigTitle content="OUR TRAVEL SPECIALISTS"></BigTitle>
        </Box>
        <Container sx={{ maxWidth: "85%" }}>
          <Grid md={12} container>
            <Grid md={12} item>
              <Box className={styles.item15}>
                <Image
                  src={"/images/slogan_about3_en.png"}
                  width="100%"
                  height="auto"
                  vertical-align="middle"
                  style={{ maxWidth: "1200px" }}
                  priority={true}
                ></Image>
              </Box>
              {/* <Box
                component="img"
                sx={{
                  height: 78,
                  width: 100,
                }}
                alt="The house from the offer."
                src={"/images/slogan_about3_en.png"}
              /> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <FooterCard></FooterCard>
    </Box>
  );
}
