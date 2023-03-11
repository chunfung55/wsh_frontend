import { Box, Container, Grid, List, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import FooterCard from "@/components/FooterCard";
import { CommonPageProps } from "@/interfaces/common";
import AboutFrame from "./components/AboutFrame";
import Image from "mui-image";

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

export default function SafariAcco() {
  return (
    <Box>
      <AboutFrame>
        <Box className={styles.item15}>
          <Box className={styles.item15}>
            <Box className={styles.h1_title}>
              <Grid justifyContent="top" md={12}>
                {" "}
                <Typography className={styles.big_title_font}>
                  Safari Accommodation
                </Typography>
              </Grid>
            </Box>
            <Box className={styles.h1_about}>
              <Grid justifyContent="top" md={12}>
                {" "}
                <Typography className={styles.p}>
                  Whether travelling as a couple, a family or on your own and to
                  satisfy individual needs, our recommended properties range
                  from luxury to more affordable options.
                </Typography>
              </Grid>
            </Box>
            <Grid container>
              <Grid item md={8}>
                <Image
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                  width="66.666667%"
                  height="415px"
                ></Image>
              </Grid>
              <Grid item md={4}>
                <Box className={styles.h1_title}>
                  <Typography className={styles.small_title_font}>
                    Premier Camps
                  </Typography>
                </Box>
                <Typography className={styles.p_right}>
                  These camps combine exclusive luxury and superbly designed
                  architecture with the warm comforts of home and personal
                  service.
                </Typography>
              </Grid>
            </Grid>
            <Grid container padding="50px 0px 0px">
              <Grid item md={8}>
                <Image
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                  width="66.666667%"
                ></Image>
              </Grid>
              <Grid item md={4}>
                <Box className={styles.h1_title}>
                  <Typography className={styles.small_title_font}>
                    Premier Camps
                  </Typography>
                </Box>
                <Typography className={styles.p_right}>
                  These camps combine exclusive luxury and superbly designed
                  architecture with the warm comforts of home and personal
                  service.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </AboutFrame>
    </Box>
  );
}
