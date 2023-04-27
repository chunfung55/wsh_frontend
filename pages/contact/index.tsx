import React from "react";
import "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { commonGetStaticPropsContext } from "@/lib/api";
import { CommonPageProps, CommonGetStaticProps } from "@/interfaces/common";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import FooterCard from "@/components/FooterCard";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContactCard from "@/components/ContactCard";

const Contact = (props: CommonPageProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Layout {...props}>
      <Container sx={{ maxWidth: "85%" }}>
        <Box sx={{ pt: "40px" }}>
          <Grid container md={12}>
            <Grid item md={6} sx={{ p: "0px 15px" }}>
              <Box>
                <Typography className={styles.contact_header}>
                  Wild Senses Holidays
                </Typography>
              </Box>
              <Grid container md={12}>
                <Grid item md={2}>
                  <Typography>
                    <LocalPhoneIcon fontSize="medium" /> :{" "}
                  </Typography>
                </Grid>
                <Grid item md={0.5}></Grid>
                <Grid item md={9.5}>
                  <Typography className={styles.contact_right_p}>
                    {" "}
                    852 - 2813 8778
                  </Typography>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid item md={2}>
                  <Typography>
                    <EmailIcon fontSize="medium" />:
                  </Typography>
                </Grid>
                <Grid item md={0.5}></Grid>
                <Grid item md={9.5}>
                  <Typography className={styles.contact_right_p}>
                    {" "}
                    enquiry@wildsensesholidays.com
                  </Typography>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid item md={2}>
                  <Typography>
                    <NearMeIcon fontSize="medium" /> :{" "}
                  </Typography>
                </Grid>
                <Grid item md={0.5}></Grid>
                <Grid item md={9.5}>
                  <Typography className={styles.contact_right_p}>
                    {" "}
                    Our office is relocated and will re-open at new location in
                    late 2022. Appointment can be arranged at our meeting room
                    in Causeway Bay during the process. （In view of the latest
                    situation of the COVID-19 epidemic, we implement
                    Work-from-home arrangement for our staffs, kindly make an
                    appointment with us before you visit, thank you）
                  </Typography>
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid item md={2}>
                  <Typography>
                    <AccessTimeIcon fontSize="medium" /> :{" "}
                  </Typography>
                </Grid>
                <Grid item md={0.5}></Grid>
                <Grid item md={9.5}>
                  <Typography className={styles.contact_right_p}>
                    {" "}
                    Mon - Fri : 10:30am - 6:00pm (Lunch Hour 1:30pm - <br></br>
                    2:30pm)<br></br>
                    <br></br>
                    Sat : 12pm - 3pm (**By Appointment Only) <br></br>
                    <br></br>
                    Sun & Public Holidays : Closed
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} sx={{ p: "0px 15px" }}>
              <Box>Map</Box>
            </Grid>
            <Grid container md={12} sx={{ p: "0px 15px" }}>
              <Grid item md={12}>
                <Typography className={styles.contact_remark}>
                  Our team of passionate and experienced staffs with in-depth
                  Africa knowledge are always here to understand your dreams
                  <br></br>
                  and tailor-made the most inspirational safari of a lifetime.
                  Be in touch with us:
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider
            sx={{
              backgroundColor: "#564C4A",
              m: "16px 0px",
              borderBottomWidth: 2,
            }}
          />

          <Grid container sx={{ p: "20px 15px 0px" }}>
            <Grid
              md={12}
              sx={{ p: "0px 15px" }}
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item md={12}>
                <Box className={styles.contact_header}>
                  <Typography className={styles.contact_font}>
                    Get in touch with Us
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <ContactCard></ContactCard>
        </Box>
      </Container>
      <FooterCard></FooterCard>
    </Layout>
  );
};

export async function getStaticProps({ locale }: CommonGetStaticProps) {
  return commonGetStaticPropsContext(locale);
}
export default Contact;
