import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Typography from "@mui/material/Typography";

// interface imgFrameItem {
//   img: string;
//   title: string;
// }

// const ImgFrame = (props: imgFrameItem) => {};

const ImgFrame = (props: any) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <center>
      <ImageListItem key={props.img}>
        <img
          className={styles.imgFrame}
          src={`${props.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${props.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={props.title}
          loading="lazy"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        {isShown && (
          <Box className={styles.imgFrame_backgrd}>
            <Typography className={styles.imgFrame_text}>
              {props.title}
            </Typography>
          </Box>
        )}
      </ImageListItem>
    </center>
  );
};

export default ImgFrame;
