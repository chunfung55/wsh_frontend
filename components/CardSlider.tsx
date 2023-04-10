import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import ImgCard from "./ImgCard";
import { imgCardItem, cardObjs } from "@/interfaces/ui";

export default function CardSlider(cardObjs: cardObjs) {
  return (
    <Carousel className={styles.cardSlide} animation="slide">
      <Grid
        item={true}
        xs={12}
        sm={12}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "0px 15px" }}
      >
        {cardObjs.map((cardObj: imgCardItem) => (
          <Grid md={4}>
            <ImgCard
              imgLink={cardObj.imgLink}
              title={cardObj.title}
              content={cardObj.content}
              location={cardObj.location}
              night={cardObj.night}
              price={cardObj.price}
              href={cardObj.href}
            ></ImgCard>
          </Grid>
        ))}
      </Grid>
    </Carousel>
  );
}
