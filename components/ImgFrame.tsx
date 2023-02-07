import { ImageList, ImageListItem } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";

const ImgFrame = ({ img, title}: { img: string, title: string }) => {

    
  return (
    <ImageListItem key={img}>
      <img className={styles.imgFrame}
        src={`${img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
    </ImageListItem>
  )  ;
};

export default ImgFrame;
