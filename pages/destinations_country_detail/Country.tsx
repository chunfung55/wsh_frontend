import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import styles from "@/styles/Home.module.css";
import DistinFrame from "./components/DistinFrame";
import BigTitle from "@/components/BigTitle";
import Image from "mui-image";
import QuestCard from "./components/QuestCard";
import QuestSubTitle from "./components/QuestSubTitle";
import { DestinationCategorie } from "@/interfaces/common";
import { getStrapiURL } from "@/lib/api";
import { useTranslation } from "react-i18next";

export default function Country({
  country,
}: {
  country: DestinationCategorie;
}) {
  const { t } = useTranslation("common");
  const [tmpCountry, setTempCountry] = useState<DestinationCategorie>({
    id: 0,
    attributes: {
      Name: "",
      Detail: "",
      Why_Visit: "",
      Best_Time_to_Visit: "",
      Capture: "",
      Destinations: { data: [] },
      Child_Destination: { data: [] },
    },
  });
  useEffect(() => {
    const el = document.getElementById("container");
    const btn = document.getElementById("btn");
    if (el != null && btn != null) {
      btn.addEventListener("click", function handleClick() {
        if (el.style.visibility === "hidden") {
          // ✅ Shows element if hidden
          el.style.visibility = "visible";

          btn.textContent = "Hide div";
        } else {
          // ✅ Hides element if shown
          el.style.visibility = "hidden";

          btn.textContent = "Show div";
        }
      });
    }

    if (country != null) {
      const tmpCountry2 = country;
      tmpCountry2.attributes.Detail = tmpCountry2.attributes.Detail.replaceAll(
        getStrapiURL() + "/uploads",
        "/uploads"
      );
      tmpCountry2.attributes.Detail = tmpCountry2.attributes.Detail.replaceAll(
        "/uploads",
        getStrapiURL() + "/uploads"
      );
      console.log("tmpCountry2", tmpCountry2);
      setTempCountry(tmpCountry2);
    }
  }, []);
  return (
    <Box>
      <BigTitle content={tmpCountry.attributes.Name}></BigTitle>
      <DistinFrame>
        <>
          <Box className={styles.item15}>
            <Box className={styles.item15}>
              <Box className={styles.h1_title}></Box>
              <Box className={styles.h1_about}>
                <Grid justifyContent="top">
                  {" "}
                  <Typography className={styles.p3} fontSize="16px">
                    Your days are well-designed to thrill you with intimate
                    wildlife encounters and ensure that guests enjoy a
                    comfortable experience. Here is what you shall expect a day
                    to be in a safari camp.
                  </Typography>
                </Grid>
              </Box>
              <Box
                dangerouslySetInnerHTML={{
                  __html: tmpCountry.attributes.Detail,
                }}
              ></Box>
              <Grid>
                {/* <Box className={styles.h1_about}>
                  <ImageList cols={2}>
                    <ImageListItem>
                      <Image
                        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
                        width="225px"
                        height="225px"
                      ></Image>
                    </ImageListItem>
                    <ImageListItem>
                      <Image
                        src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
                        width="225px"
                        height="225px"
                      ></Image>
                    </ImageListItem>
                  </ImageList>
                </Box> */}
                <Box>
                  <Grid container md={12}>
                    <QuestCard
                      title={t("whyVisit")}
                      content={tmpCountry.attributes.Why_Visit}
                    ></QuestCard>
                    <QuestCard
                      title={t("whenToGo")}
                      content={tmpCountry.attributes.Best_Time_to_Visit}
                    ></QuestCard>
                  </Grid>
                  {/* <Grid md={12}>
                    <Box sx={{ p: "0px 15px" }}>
                      <Box sx={{ p: "60px 0px 16px 0px" }}>
                        <hr className={styles.subpage_hr}></hr>
                      </Box>
                    </Box>
                  </Grid> */}
                  {/* <Grid md={12}>
                    <QuestSubTitle
                      title={t("placesYouMayVisit")}
                    ></QuestSubTitle>
                  </Grid>
                  <Grid container md={12}>
                    <Grid item md={5.75}></Grid>
                    <Grid item md={0.5}>
                      <hr className={styles.yellow_hr} />
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                  <Box className={styles.row}></Box>
                  <Grid container md={12}>
                    <Grid item md={6}>
                      <Box className={styles.item15}>
                        <Card elevation={0}>
                          <Box style={{ position: "relative" }}>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              width="100%"
                              image="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
                              sx={{
                                ":hover": {
                                  opacity: 0.7,
                                },
                              }}
                            />

                            <Box
                              style={{
                                position: "absolute",
                                bottom: "5%",
                                right: "-130px",
                                transform: "translateX(-50%)",
                              }}
                            >
                              <Typography
                                className={styles.img_content_title}
                                sx={{ p: "10px" }}
                              >
                                Chobe National Park
                              </Typography>
                              <hr className={styles.card_img}></hr>
                              <Button className={styles.img_content_button}>
                                Read More
                              </Button>
                            </Box>
                          </Box>
                        </Card>
                      </Box>
                    </Grid>
                    <Grid item md={6}></Grid>
                  </Grid> */}
                </Box>
              </Grid>
            </Box>
          </Box>
        </>
      </DistinFrame>
    </Box>
  );
}
