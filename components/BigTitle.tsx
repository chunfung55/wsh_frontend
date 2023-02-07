import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";

const BigTitle = ({ content }: { content: string }) => {
  return (
  <Container className={styles.big_title_container} >
    <Grid md={12} className={styles.big_title}>
    <center><Typography className={styles.big_title_font}>{content}</Typography></center>
    </Grid>
    <Grid md={4}></Grid>
    <Grid md={4}>
    <center><hr className={styles.big_title_hr}></hr></center>
    </Grid>
    <Grid md={4}></Grid>
  </Container>
  );
};
export default BigTitle;
