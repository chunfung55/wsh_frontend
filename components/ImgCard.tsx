import {Card,CardActionArea,CardMedia,Typography,CardContent} from "@mui/material";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import GlobalButton from "./GlobalButton";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { padding } from "@mui/system";

export default function ImgCard() {
  return (
    <div className={styles.item}>
    <Card className={styles.card_img}  sx={{ borderRadius: '16px' }}>
      <CardMedia
        component="img"
        height="490"
        src="https://picsum.photos/id/1/700/800"
        className={styles.card_img_hr}
      />
      <CardContent>
        <div className={styles.card_body}>
        <div className={styles.card_title}>
          <center>Giraffe Manor & Kenya Fly-In Safari</center>
        </div>
        <Typography className={styles.fontsm}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        </div>
        <div className={styles.card_footer}>
        <Typography className={styles.card_loca}>
          <LocationOnIcon></LocationOnIcon>
          sabi sands, Victoria Falls, Sossusvlei
        </Typography>
       
        <Typography className={styles.card_footer_title}>
          9 Nights
        </Typography>
        <GlobalButton name="From HKD 44,480/ adult"></GlobalButton>
        </div>
      </CardContent>
  </Card>
  </div>
    );
};
