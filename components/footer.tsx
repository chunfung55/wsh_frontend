import {
  Container,
  Grid,
  Paper,
  Box,
  Divider,
  Typography, IconButton,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import GlobalButton from "./GlobalButton";
import ButtonBase from "@mui/material/ButtonBase";
import { Righteous, Yellowtail } from "@next/font/google";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const destinations = [
  "Kenya",
  "Tanzania",
  "Botswana",
  "Namibia",
  "Uganda",
  "Rwanda",
  "South Africa",
  "Zambia",
  "Zimbabwe",
  "Madagascar",
  "Antarctica",
  "India",
  "Svalbard",
  "Galapagos"
];

const itineraries = [
  "Signature Itineraries",
  "Family Holidays",
  "Honeymoon",
  "The Road Less Travelled",
  "The Great Migration",
  "Gorilla Trekking",
  "Kenya",
  "Tanzania",
  "South Africa",
  "Botswana",
  "Namibia",
  "Uganda",
  "Rwanda",
  "Zambia",
  "Madagascar",
  "Antarctica",
  "Arctic"
];

const travelInfo = [
  "News",
  "To Know Before Your Journey"
];

const aboutUs = [
  "Who we are",
  "Extraordinary Moment"
];


export default function Footer() {
  return (
    <div>
      <Container maxWidth="false" sx={{ maxWidth:'85%'  }} className={styles.footer}>
        <Grid
          item
          xs={12}
          sm={12}
          container
          spacing={0}
          className={styles.footer_top}
        >
          <Grid xs={2}></Grid>
          <Grid xs={2}  className={styles.footer_grid}>
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
          <Grid xs={4} display="flex" justifyContent="center"  alignItems="start" className={styles.footer_grid}>
            <IconButton aria-label="delete">
              <FacebookIcon fontSize="large"/>
            </IconButton>
            <IconButton aria-label="delete">
              <InstagramIcon fontSize="large"/>
            </IconButton>
          </Grid>
          <Grid xs={2} className={styles.footer_grid}>
            <GlobalButton name="Enquire Us"></GlobalButton>
          </Grid>
          <Grid xs={2}> </Grid>
        </Grid>
        <hr className={styles.footer_hr}></hr>
        <Grid
          item
          lg={12}
          sm={6}
          container
          spacing={0}
          className={styles.footer_top}
        >
          <Grid xs={2} className={styles.footer_grid}></Grid>
          <Grid xs={2} className={styles.footer_grid}>
            <Typography className={styles.footer_siteTitle}>
              Destinations
            </Typography>
          </Grid>
          <Grid xs={2} className={styles.footer_grid}>
            <Typography className={styles.footer_siteTitle}>
              Itineraries
            </Typography>
          </Grid>
          <Grid xs={2} className={styles.footer_grid}>
            <Typography className={styles.footer_siteTitle}>
              Travel Info
            </Typography>
          </Grid>
          <Grid xs={2} className={styles.footer_grid}>
            <Typography className={styles.footer_siteTitle}>
              About Us
            </Typography>
          </Grid>
          <Grid xs={2}></Grid>

          <Grid xs={2}></Grid>
          <Grid xs={2} className={styles.footer_grid}>

            {destinations.map((destin) => (
              <a href={destin} className={styles.footer_content}><Typography className={styles.footer_content}>
                {destin}
              </Typography></a>
            ))}
          </Grid>
          <Grid xs={2} className={styles.footer_grid}>
            {itineraries.map((itin) => (
              <a href={itin} className={styles.footer_content}><Typography className={styles.footer_content}>
                {itin}
              </Typography></a>
            ))}
          </Grid>
          <Grid xs={2} className={styles.footer_grid}>
            {travelInfo.map((info) => (
              <a href={info} className={styles.footer_content}><Typography className={styles.footer_content}>
                {info}
              </Typography></a>
            ))}
          </Grid>
          <Grid xs={2} className={styles.footer_grid}>
            {aboutUs.map((us) => (
              <a href={us} className={styles.footer_content}><Typography className={styles.footer_content}>
                {us}
              </Typography></a>
            ))}
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <Typography className={styles.footer_copyRight}>Copyright C 2019 Wild Senses Holidays</Typography>
        </Grid>
      </Container>
    </div>
  );
}
