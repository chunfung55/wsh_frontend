import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import styles from "@/styles/Home.module.css";
import DistinFrame from "./components/DistinFrame";
import BigTitle from "@/components/BigTitle";
import Image from "mui-image";
import QuestCard from "./components/QuestCard";
import QuestSubTitle from "./components/QuestSubTitle";
import { Destination, DestinationCategorie } from "@/interfaces/common";
import { getStrapiURL } from "@/lib/api";
import { useTranslation } from "react-i18next";
import PlacesYouMayVist from "./components/PlacesYouMayVist";

export default function Country({
  country,
}: {
  country: DestinationCategorie;
}) {
  const { t } = useTranslation("common");
  const [tmpCountry, setTempCountry] = useState<DestinationCategorie>({
    Name: "",
    Detail: "",
    Why_Visit: "",
    Best_Time_to_Visit: "",
    Capture: "",
    Destinations: { data: [] },
  });
  const [destinations, setDestinations] = useState<Destination[]>([]);
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
      tmpCountry2.Detail = tmpCountry2.Detail.replaceAll(
        getStrapiURL() + "/uploads",
        "/uploads"
      );
      tmpCountry2.Detail = tmpCountry2.Detail.replaceAll(
        "/uploads",
        getStrapiURL() + "/uploads"
      );
      console.log("tmpCountry2", tmpCountry2);
      setTempCountry(tmpCountry2);
      setDestinations(tmpCountry2.Destinations.data);
    }
  }, []);
  return (
    <Box>
      <BigTitle content={tmpCountry.Name}></BigTitle>
      <DistinFrame>
        <>
          <Box className={styles.item15}>
            <Box className={styles.item15}>
              <Box className={styles.h1_title}></Box>
              {/* <Box className={styles.h1_about}>
                <Grid justifyContent="top">
                  {" "}
                  <Typography className={styles.p3} fontSize="16px">
                    Your days are well-designed to thrill you with intimate
                    wildlife encounters and ensure that guests enjoy a
                    comfortable experience. Here is what you shall expect a day
                    to be in a safari camp.
                  </Typography>
                </Grid>
              </Box> */}
              <Box
                dangerouslySetInnerHTML={{ __html: tmpCountry.Detail }}
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
                      content={tmpCountry.Why_Visit}
                    ></QuestCard>
                    <QuestCard
                      title={t("whenToGo")}
                      content={tmpCountry.Best_Time_to_Visit}
                    ></QuestCard>
                  </Grid>
                  <Grid md={12}>
                    <Box sx={{ p: "0px 15px" }}>
                      <Box sx={{ p: "60px 0px 16px 0px" }}>
                        <hr className={styles.subpage_hr}></hr>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid md={12}>
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
                  {destinations &&
                    destinations.map((destination) => (
                      <Grid container md={12}>
                        <PlacesYouMayVist
                          imageLink={
                            getStrapiURL() +
                            destination.attributes.List_Photo.data.attributes
                              .url
                          }
                          destinationsTitle={destination.attributes.Title}
                        />
                      </Grid>
                    ))}
                </Box>
              </Grid>
            </Box>
          </Box>
        </>
      </DistinFrame>
    </Box>
  );
}
