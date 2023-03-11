import { Box, Card, CardActionArea, CardMedia, Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";

const JourneyCard = ({imgLink , name, btnContent, url, styleClass }:{imgLink:string, name:string,btnContent:string, url:string, styleClass:string}) => {
  return (   
  <Card elevation={0} >
    <CardActionArea href={url}>
        <Box style={{ position: "relative" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                width="100%"
                image={imgLink}
            />
            <Box style={{ position: "absolute", bottom: "3%", right:"2%", width:"100%"}}>
                <Box style={{  float: "right"}}><Typography className={styles.img_content_title} >{name}</Typography>
              <Divider sx={{backgroundColor:'#fff' }}/>
                <Button className={styles.img_content_button} sx={{ float: "right", textTransform:"none",  "&.MuiButtonBase-root:hover": {
                bgcolor: " hsla(42, 37%, 64%, .8)"
              }}} disableRipple>{btnContent}</Button>
                </Box>
            </Box>

        </Box>
  </CardActionArea>
    </Card>);
};

export default JourneyCard;

