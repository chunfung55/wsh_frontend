import {
  Container,
  Grid,
  Paper,
  Box,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import GlobalButton from "./GlobalButton";
import ButtonBase from "@mui/material/ButtonBase";
import { Righteous, Yellowtail } from "@next/font/google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo2 from "./img/logo2.png";

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
  "Galapagos",
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
  "Arctic",
];

const travelInfo = ["News", "To Know Before Your Journey"];

const aboutUs = ["Who we are", "Extraordinary Moment"];

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://www.wildsensesholidays.com/images/enquiry_ban.png)",
        t: "32px",
        b: "2px",
      }}
      className={styles.footer}
    >
      <Container className={styles.footer_background}>
        <Grid
        xl={12}
          lg={12}
          md={12}
          sm={12}
          container
        
          className={styles.footer_top}
        >
          <Grid md={2}></Grid>
          <Grid
            item={true}
            md={3}
            sm={12}
            xs={12}
            className={styles.footer_grid}
            display="flex"
          >
            <Box
              component="img"
              sx={{
                height: 78,
                width: 100,
              }}
              alt="The house from the offer."
              src={logo2.src}
            />
          </Grid>
          <Grid
            item={true}
            md
            sm={12}
            xs={12}
            display="flex"
            className={styles.footer_grid}
            alignItems="start"
          >
            <IconButton aria-label="delete">
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="delete">
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid
            item={true}
            md
            sm={12}
            xs={12}
            className={styles.footer_grid}
            display="flex"
            justifyContent="center"
            alignItems="start"
          >
            <GlobalButton
              content="Enquire Us"
              cssName={styles.comButton}
              url={""}
            ></GlobalButton>
          </Grid>
          <Grid md={2}></Grid>
        </Grid>
      </Container>
      <Container className={styles.footer_background}>
        <hr className={styles.footer_hr}></hr>
        <Grid
          container
          lg={12}
          md={12}
          sm={12}
          xs={12}
          spacing={0}
          className={styles.footer_top}
        >
          <Grid md={2} sm={0}></Grid>
          <Grid sm={12} xs={12} md={2} className={styles.footer_grid}>
            <Typography className={styles.footer_siteTitle}>
              Destinations
            </Typography>
            {destinations.map((destin) => (
              <a href={destin} className={styles.footer_content}>
                <Typography className={styles.footer_content}>
                  {destin}
                </Typography>
              </a>
            ))}
          </Grid>
          <Grid sm={12} xs={12} md={2} className={styles.footer_grid}>
            <Typography className={styles.footer_siteTitle}>
              Itineraries
            </Typography>
            {itineraries.map((itin) => (
              <a href={itin} className={styles.footer_content}>
                <Typography className={styles.footer_content}>
                  {itin}
                </Typography>
              </a>
            ))}
          </Grid>
          <Grid sm={12} xs={12} md={2} className={styles.footer_grid}>
            <Typography className={styles.footer_siteTitle}>
              Travel Info
            </Typography>
            {travelInfo.map((info) => (
              <a href={info} className={styles.footer_content}>
                <Typography className={styles.footer_content}>
                  {info}
                </Typography>
              </a>
            ))}
          </Grid>
          <Grid sm={12} xs={12} md={2} className={styles.footer_grid}>
            <Typography className={styles.footer_siteTitle}>
              About Us
            </Typography>
            {aboutUs.map((us) => (
              <a href={us} className={styles.footer_content}>
                <Typography className={styles.footer_content}>{us}</Typography>
              </a>
            ))}
          </Grid>
          <Grid md={2} sm={0}></Grid>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <Typography className={styles.footer_copyRight}>
            Copyright C 2019 Wild Senses Holidays
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}
