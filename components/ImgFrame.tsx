import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import { styled } from '@mui/material/styles';

const ImgFrame = ({ img, title }: { img: string, title: string }) => {


  return (
    <ImageListItem key={img}>
      <img className={styles.imgFrame}
        src={`${img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
      <Box
      className="boxTitle" 
      style={{
        display: 'none',
        position: 'absolute',
        color: 'white',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
      }} >{title}</Box>
    </ImageListItem>
  );
};

export default ImgFrame;
