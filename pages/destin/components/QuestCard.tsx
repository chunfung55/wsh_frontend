import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import "@/styles/Home.module.css";
import styles from "@/styles/Home.module.css";
const QuestCard = ({title , contnet }:{title:string, contnet:string}) => {
  return(
  <Grid item sx={{p:"0px 15px"}} md={6}>
  <Card >
  <CardHeader title="Why Visit?" sx={{backgroundColor:"#d0c19a7d", p:"12px 20px"}} titleTypographyProps={{fontSize:"13px", color:"#564C4A", fontFamily:"Georgia-serif"}}></CardHeader>
  <CardContent sx={{p:"20px"}}>
    <Box sx={{p:"10px 20px", fontSize:"14px"}}> <Box className={styles.p}> -  Visit Masai Mara for all year round game-viewing with abundant wildlife and exciting moments.</Box></Box>
  </CardContent>
  </Card>
</Grid>) ;
};

export default QuestCard;

