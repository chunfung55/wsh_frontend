import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box, Grid } from "@mui/material";
import styles from "../styles/Home.module.css";
export function Example() {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export function Item(props: any) {
  return (
    <Paper className={styles.slide}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography className={styles.slider_title} paragraph>
          {props.item.name}
        </Typography>
        <Typography className={styles.slider_title} paragraph>
          {props.item.description}
        </Typography>
      </Box>
    </Paper>
  );
}
