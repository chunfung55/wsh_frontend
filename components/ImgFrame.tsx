import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";

interface imgFrameItem {
  img: string;
  title: string;
}

// const ImgFrame = (props: imgFrameItem) => {};

const ImgFrame = ({ img, title }: { img: string; title: string }) => {
  return (
    <ImageListItem key={props.img}>
      <img
        className={styles.imgFrame}
        src={`${props.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${props.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={props.title}
        loading="lazy"
      />
      <Box
        className="boxTitle"
        style={{
          display: "none",
          position: "absolute",
          color: "white",
          width: "50%",
          height: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {props.title}
      </Box>
    </ImageListItem>
  );
};

export default ImgFrame;
