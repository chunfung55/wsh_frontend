import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import styles from "@/styles/Home.module.css";
import GlobalButton from "@/components/GlobalButton";

interface visitItem {
  url: string;
  title: string;
  img: string;
  content: string;
  style: string;
}

const VisitItem = (obj: visitItem) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Box>
      <Box sx={{ p: "0px 30px 0px 0px", borderTop: "16px" }}>
        <Card
          elevation={0}
          sx={{ position: "relative" }}
          className={obj.style}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <CardActionArea href={obj.url}>
            <CardMedia
              component="img"
              image={obj.img}
              sx={{
                ":hover": {
                  opacity: 0.7,
                },
              }}
            />
            <Box
              style={{
                position: "absolute",
                bottom: "5%",
                right: "0",
                float: "left",
              }}
            >
              <Typography
                className={styles.img_content_title}
                sx={{ p: "10px" }}
              >
                {obj.title}
              </Typography>
              <Divider sx={{ backgroundColor: "#fff" }} />
              {isShown && (
                <>
                  <Typography
                    className={styles.footer_content}
                    sx={{ p: "10px" }}
                  >
                    {obj.content}
                  </Typography>
                </>
              )}
            </Box>
            <Box className={styles.bottom_right}>
              <GlobalButton
                cssName={styles.comRadiusButton}
                content="Read More"
                url={""}
              ></GlobalButton>
            </Box>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};
export default VisitItem;
