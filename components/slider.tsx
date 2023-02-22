
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box, Grid } from "@mui/material";
import styles from "../styles/Home.module.css";
import Header from "./header";
import Image from "mui-image";

export function Example() {
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
    <Carousel  className={styles.slide} animation="slide">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export function Item(props: any) {
  return (
    <Paper>
      
      <Image src={props.item.imglink} ></Image>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box>
        <Typography className={styles.slider_title} paragraph>
          {props.item.name}
        </Typography>
        </Box>
        <Box>
        <Typography className={styles.slider_title} paragraph>
          {props.item.description}
        </Typography>
        </Box>
      </Box>
    
    </Paper>
  );
}
