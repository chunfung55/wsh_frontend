import {
  Container,
  Grid,
  Paper,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import GlobalButton from "./GlobalButton";
import ButtonBase from "@mui/material/ButtonBase";
import { Righteous, Yellowtail } from "@next/font/google";

export default function Footer() {
  return (
    <>
      <Container maxWidth="xl" className={styles.footer}>
        <Grid
          item
          xl={12}
          sm={6}
          container
          spacing={0}
          className={styles.footer_top}
        >
          <Grid xl={2}></Grid>
          <Grid xl={2}>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 100, md: 100 },
                maxWidth: { xs: 100, md: 100 },
              }}
              alt="The house from the offer."
              src="https://picsum.photos/id/1/200/300"
            />
          </Grid>
          <Grid xl={4} display="flex" justifyContent="center">
            {" "}
            sasd
          </Grid>
          <Grid xl={2}>
            {" "}
            <GlobalButton name="Enquire Us"></GlobalButton>
          </Grid>
          <Grid xl={2}> </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          sm={6}
          container
          spacing={0}
          className={styles.footer_top}
        >
          <Grid xs={2}></Grid>
          <Grid xs={2}>
            <Typography className={styles.footer_siteTitle}>
              Destinations
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography className={styles.footer_siteTitle}>
              Itineraries
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography className={styles.footer_siteTitle}>
              Travel Info
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography className={styles.footer_siteTitle}>
              About Us
            </Typography>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <Typography>Copyright C 2019 Wild Senses Holidays</Typography>
        </Grid>
      </Container>
    </>
  );
}
