import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Image from "mui-image";

interface imgObj {
  imgLink: string;
  title: string;
  content: string;
  href: string;
}

interface cardObj {
  imgLink: string;
  title: string;
  content: string;
  location?: string;
  night?: string;
  price?: string;
  href: string;
}

export default function ImgSlider() {
  const items = [
    {
      imglink: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      imglink: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  return (
    <Carousel className={styles.slide} animation="slide">
      {items.map((item, i) => (
        <ImgItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
function ImgItem(props: any) {
  return (
    <Paper>
      <Card sx={{ borderRadius: "0", position: "relative",backgroundColor:'hsl(189, 58%, 62%)' }}>
        <CardActionArea href={props.item.href}>
          <CardMedia>
            <Image src={props.item.imglink} height="100%"></Image>
            <Box
              sx={{
                position: "absolute",
                color: "white",
                top: "35%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <center>
                {" "}
                <Typography className={styles.slider_title}>
                  {props.item.name}
                </Typography>
                <Typography className={styles.slider_title}>
                  {props.item.description}
                </Typography>
              </center>
            </Box>
          </CardMedia>
        </CardActionArea>
      </Card>
    </Paper>
  );
}
