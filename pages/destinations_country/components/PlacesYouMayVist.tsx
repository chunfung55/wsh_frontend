import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import "@/styles/Home.module.css";
import styles from "@/styles/Home.module.css";
import { PlacesYouMayVisitProps } from "@/interfaces/common";
import { useTranslation } from "next-i18next";

const PlacesYouMayVist = (props: PlacesYouMayVisitProps) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Grid item md={6}>
        <Box className={styles.item15}>
          <Card elevation={0}>
            <Box style={{ position: "relative" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                width="100%"
                image={props.imageLink}
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
                  {props.destinationsTitle}
                </Typography>
                <hr className={styles.card_img}></hr>
                <Button className={styles.img_content_button}>
                  {t("readMore")}
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default PlacesYouMayVist;
