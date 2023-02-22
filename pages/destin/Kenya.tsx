import React from "react";
import { BottomNavigation, BottomNavigationAction, Box, Button, Divider, Grid, ImageList, ImageListItem, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import DistinFrame from "./components/DistinFrame";
import BigTitle from "@/components/BigTitle";
import Image from "mui-image";

const contents = [{title:"Morning Game Drive",
content:"As dawn breaks over the African bush, a gentle tap on your door will wake you to the pleasures of a new day. Your ranger will discuss what you hope to see that day over fragrant tea or coffee and morning biscuits or muffins. Set out in an open 4x4 safari vehicle in the company of a ranger and tracker team, who will attempt to track your favorite animals.",
imgUrl:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"},{title:"Morning Game Drive",
content:"As dawn breaks over the African bush, a gentle tap on your door will wake you to the pleasures of a new day. Your ranger will discuss what you hope to see that day over fragrant tea or coffee and morning biscuits or muffins. Set out in an open 4x4 safari vehicle in the company of a ranger and tracker team, who will attempt to track your favorite animals.",
imgUrl:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"}];

export default function Kenya() {
    return (
        <Box>
             <BigTitle content="KENYA"></BigTitle>
            <DistinFrame>
            <Box className={styles.item15}>
                    <Box className={styles.item15}>
                    <Box className={styles.h1_title}>
                   
                        </Box>
                        <Box className={styles.h1_about}>
                            <Grid justifyContent="top">  <Typography className={styles.p3} fontSize="16px">Your days are well-designed to thrill you with intimate wildlife encounters and ensure that guests enjoy a comfortable experience. Here is what you shall expect a day to be in a safari camp.</Typography></Grid>
                        </Box>
                    
                            <Grid>
                            <Box className={styles.h1_about}>
                        <ImageList cols={2}>
                        <ImageListItem >
                        <Image src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" width="225px" height="225px"></Image>
                        </ImageListItem>
                        <ImageListItem >
                        <Image src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" width="225px" height="225px"></Image>
                        </ImageListItem>
                        </ImageList>
                        </Box>
                        </Grid>
                        
                    </Box>
                </Box>
            <Box>
          
          
            </Box>
            </DistinFrame>
        </Box>
    );
};


