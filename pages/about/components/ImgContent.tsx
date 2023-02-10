import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "@/styles/Home.module.css";
import Image from "mui-image";

const ImgContent = ({ img, title, content }:{ img:string, title:string, content:string}) => {
  return   <Grid container sx={{ flexgrow: 1 }}  >
  <Grid item md={6} className={styles.item15}>
      <Image src={img} width='100%'></Image>
  </Grid>
  <Grid item md={6} className={styles.item15}>
      <Box>
          <Typography className={styles.h2_about}>{title}</Typography>
          <Typography className={styles.p2}>{content}</Typography>
      </Box>
  </Grid>
</Grid>

};

export default ImgContent;
