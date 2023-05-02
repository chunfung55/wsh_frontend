import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Link,
  Button,
  Box,
  styled,
} from "@mui/material";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import GlobalButton from "./GlobalButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { padding } from "@mui/system";
import { useState } from "react";
import { imgCardItem } from "@/interfaces/ui";

// interface cardItem {
//   imgLink: string;
//   title: string;
//   content: string;
//   location?: string;
//   night?: string;
//   price?: string;
//   href: string;
// }

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

export default function ImgCard(cardObj: imgCardItem) {
  return (
    <Box className={styles.item}>
      <Card
        className={styles.card_img}
        sx={{ borderRadius: "16px", boxShadow: 0 }}
      >
        <CardActionArea href={cardObj.href}>
          <CardMedia
            width="100%"
            component="img"
            src={cardObj.imgLink}
            className={styles.card_img_hr}
          />
          <CardContentNoPadding>
            <Box className={styles.card_body}>
              <Box className={styles.card_title}>
                <center>{cardObj.title}</center>
              </Box>
              <Typography className={styles.fontsm}>
                {cardObj.content}
              </Typography>
            </Box>
            <Box className={styles.card_footer}>
              <Typography className={styles.card_loca}>
                <LocationOnIcon fontSize="small" />
                {cardObj.location}
              </Typography>
              <Typography className={styles.card_footer_title}>
                {cardObj.night}
              </Typography>
              <Button
                className={styles.img_content_button}
                sx={{
                  textTransform: "none",
                  borderRadius: "none",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: " hsla(42, 37%, 64%, .8)",
                  },
                }}
                disableRipple
              >
                {cardObj.price}
              </Button>
            </Box>
          </CardContentNoPadding>
        </CardActionArea>
      </Card>
    </Box>
  );
}
