import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import "@/styles/Home.module.css";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
const QuestSubTitle = ({title  }:{title:string}) => {
  return( <center><Box className={styles.h3_home_title}><Typography sx={{fontSize:"28px", fontFamily:"sans-serif", color:"#564C4A"}}>{title}</Typography></Box>
</center>
 ) ;
};

export default QuestSubTitle;

