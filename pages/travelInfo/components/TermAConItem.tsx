import GlobalButton from "@/components/GlobalButton";
import { Box, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import Image from "mui-image";

interface termAConItem {
  img: string;
  title?: string;
  content?: string;
  url: string;
}

const TermAConItem = (item: termAConItem) => {
  return (
    <>
      <Grid item md={4}>
        <Box className={styles.item15}>
          <Image src={item.img} width="100%"></Image>
        </Box>
      </Grid>
      <Grid item md={8} sx={{ position: "relative" }}>
        <Box className={styles.item15}>
          <Typography
            fontSize="32px"
            sx={{
              color: "#564C4A",
              m: "0px 0px 8px",
              fontFamily: "sans-serif",
            }}
          >
            {item.title}
          </Typography>
          <Typography className={styles.p}>{item.content}</Typography>
          <Box
            sx={{
              position: "absolute",
              float: "right",
              bottom: "0",
              right: "0",
            }}
          >
            <GlobalButton
              cssName={styles.comButton}
              content="Read More"
              url={item.url}
            ></GlobalButton>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default TermAConItem;
