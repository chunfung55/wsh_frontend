import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import ImgCard from "./ImgCard";

interface cardObj{
    imgLink: string,
    title: string,
    content: string,
    location?: string,
    night?: string,
    price?: string,
    href: string,
  }
  

  export default function CardSlider(cardObjs:any) {
    return (
      <Carousel  className={styles.cardSlide} animation="slide">
         <Grid item={true} 
                  xs={12}
                  sm={12}
                  container
                  spacing={0}
                  alignItems="center"
                  justifyContent="center" sx={{ padding: '0px 15px' }}>
         {cardObjs.map((cardObj:cardObj) => (
            <Grid md={4}>
                <ImgCard imgLink={cardObj.imgLink} title={cardObj.title} content={cardObj.content} location={cardObj.location} night={cardObj.night} price={cardObj.price} href={cardObj.href}></ImgCard>
            </Grid>
          ))}
          </Grid>
      </Carousel>
    );
  }


  