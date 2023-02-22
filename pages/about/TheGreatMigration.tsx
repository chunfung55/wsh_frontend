import React from "react";
import { BottomNavigation, BottomNavigationAction, Box, Button, Divider, Grid, ImageList, ImageListItem, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";

import AboutFrame from "./components/AboutFrame";
import WhatTimeContent from "./components/WhatTimeContent";
import ImgFrame from "@/components/ImgFrame";
import Image from "mui-image";

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    }
];

export default function TheGreatMigration() {

    return (
        <Box>
            <AboutFrame>
                <Box className={styles.item15}>
                    <Box className={styles.p_right}>
                        <Box className={styles.h1_about}>
                            <Grid justifyContent="top" md={12}>
                                <Box className={styles.item15}>
                                    <Typography className={styles.p_right}><b>The Great Migration</b></Typography>
                                    <br></br>
                                </Box>
                            </Grid>
                            <Grid container md={12}>
                            <Grid  item={true}  justifyContent="top" md={6}>
                                <Box className={styles.item15}>
                                    <Typography className={styles.p_right}>One of nature's biggest wildlife spectacles is the wildebeest migration, over two million animals migrate from the Serengeti National Park in Tanzania to the greener pastures of the Masai Mara National Reserve in Kenya during June through to October. The principle players are the 1.5 millions wildebeests, with supporting roles from some 350,000 Thomson’s gazelle, 200,000 zebra and 12,000 eland.</Typography>
                                </Box>
                            </Grid>
                            <Grid  item={true}  justifyContent="top" md={6}>
                                <Box className={styles.item15}>
                                    <Typography className={styles.p_right}>The migration has to cross the Mara River in the Masai Mara. This is one of the highlights as the animals try and cross the Mara River and contend with hungry crocodiles.The lions, hyenas, leopards, cheetahs and lesser predators await the annual coming of the migration with eager anticipation.</Typography>
                                    <br></br>
                                    <Typography className={styles.p_right}>The wildebeest migration follows the year’s annual rainfall so its appearance in Tanzania and Kenya is weather dependent.</Typography>
                                </Box>
                            </Grid>
                            </Grid>

                            <Grid container md={12}>
                            <Grid item={true}  justifyContent="top" md={6}>
                            <Box className={styles.item15}>
                            <Image src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" width='100%' ></Image>
                            </Box>
                            </Grid>
                            <Grid  item={true}  justifyContent="top" md={6}>
                            <Box className={styles.item15}>
                            <Image src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" width='100%' ></Image>
                            </Box>
                            </Grid>
                            </Grid>
                           
                        </Box>
                    </Box>
                </Box>
            </AboutFrame>
        </Box>
    );
};


