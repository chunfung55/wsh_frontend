import { Card, CardActionArea, CardMedia, Typography, CardContent } from "@mui/material";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import GlobalButton from "./GlobalButton";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { padding } from "@mui/system";

export default function ImgCard({ title, content, location, night, price }: 
  { title: string, content: string, location: string, night: string, price: string }) {
  return (
    <div className={styles.item}>
      <Card className={styles.card_img} sx={{ borderRadius: '16px' }}>
        <CardMedia
          component="img"
          height="490"
          src="https://picsum.photos/id/1/700/800"
          className={styles.card_img_hr}
        />
        <CardContent>
          <div className={styles.card_body}>
            <div className={styles.card_title}>
              <center>{title}</center>
            </div>
            <Typography className={styles.fontsm}>
              {content}
            </Typography>
          </div>
          <div className={styles.card_footer}>
            <Typography className={styles.card_loca}>
              <LocationOnIcon></LocationOnIcon>
              {location}
            </Typography>

            <Typography className={styles.card_footer_title}>
              {night}
            </Typography>
            <GlobalButton name={price} cssClass="comButton_card"></GlobalButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
