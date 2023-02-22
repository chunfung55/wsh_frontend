import { Box, Container, Grid, List, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import Image from "mui-image";

const WhatTimeContent= ({ img, title, content }:{ img:string, title:string, content:string}) => {
    return  (
     
    <Grid item={true} md={6}>
        <Image src={img} width='100%'  className={styles.item15}></Image>
        <Typography className={styles.p}>{title}</Typography>
        <Typography className={styles.p_right}>{content}</Typography>
    </Grid>
   
  
  )
};
export default WhatTimeContent;