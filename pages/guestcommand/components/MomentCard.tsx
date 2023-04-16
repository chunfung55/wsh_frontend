import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "@/../styles/Home.module.css";
import { cardItem, momentCardItem } from "@/interfaces/ui";
export default function MomentCard(obj: momentCardItem) {
  return (
    <Grid item md={4}>
      <Box className={styles.item15}>
        <Card
          sx={{
            transition: "transform 1s ease-in-out",
            ":hover": {
              transform: "scale3d(1.15, 1.15, 1)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            width="100%"
            image={obj.img}
          />
          <CardContent
            sx={{
              p: "0",
              "&:last-child": { pb: 0 },
              flex: "1 1 auto",
              lineHeight: "1.5",
            }}
          >
            <Divider
              sx={{ borderBottomWidth: 5, backgroundColor: "#d0c19A" }}
            ></Divider>
            <Box sx={{ p: "20px" }}>
              <center>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#7E7051",
                    fontFamily: "Georgia",
                    mb: "12px",
                  }}
                >
                  {obj.title}
                </Typography>
              </center>
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#564C4A",
                  fontFamily: "sans-serif",
                }}
              >
                {obj.content}
              </Typography>
            </Box>
            <Box sx={{ backgroundColor: "#629f89", p: "12px 20px" }}>
              <Typography display="inline">
                <LocationOnIcon
                  fontSize="small"
                  sx={{ color: "#fff" }}
                ></LocationOnIcon>{" "}
              </Typography>
              <Typography className={styles.card_footer_font} display="inline">
                {obj.location}
              </Typography>
              <Typography
                className={styles.card_footer_font_right}
                display="inline"
              >
                {obj.author}
                <Typography sx={{ p: "0px 5px 0 5px" }} display="inline" />[
                {obj.date}]
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
