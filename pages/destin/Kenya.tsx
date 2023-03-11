import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box, Button, Card, CardContent, CardHeader, CardMedia, Divider, Grid, ImageList, ImageListItem, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import DistinFrame from "./components/DistinFrame";
import BigTitle from "@/components/BigTitle";
import Image from "mui-image";
import { fontSize } from "@mui/system";
import QuestCard from "./components/QuestCard";
import QuestSubTitle from "./components/QuestSubTitle";
import JourneyCard from "@/components/JourneyCard";
import LatestNewsItem from "../travelInfo/components/LatestNewsItem";
import VisitItem from "./components/visitItem";

const contents = [{
    title: "Morning Game Drive",
    content: "As dawn breaks over the African bush, a gentle tap on your door will wake you to the pleasures of a new day. Your ranger will discuss what you hope to see that day over fragrant tea or coffee and morning biscuits or muffins. Set out in an open 4x4 safari vehicle in the company of a ranger and tracker team, who will attempt to track your favorite animals.",
    imgUrl: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
}, {
    title: "Morning Game Drive",
    content: "As dawn breaks over the African bush, a gentle tap on your door will wake you to the pleasures of a new day. Your ranger will discuss what you hope to see that day over fragrant tea or coffee and morning biscuits or muffins. Set out in an open 4x4 safari vehicle in the company of a ranger and tracker team, who will attempt to track your favorite animals.",
    imgUrl: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
}];

const news = [{url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', title:'Book Your 2022/23 Antarctica Journey ', img:'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',content:'There can be no finer way to experience Antarctica than booking a well designed journey with Wild Senses Holidays.'},{url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', title:'Book Your 2022/23 Antarctica Journey ', img:'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',content:'There can be no finer way to experience Antarctica than booking a well designed journey with Wild Senses Holidays.'}];

export default function Kenya() {
    const [isShown, setIsShown] = useState(false);
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
                               <Grid container md={12}>
                               <Grid item md={1.65}>
                                        <Image src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" width="225px" height="225px"></Image>
                                </Grid>
                                <Grid item md={1.65}>
                                        <Image src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" width="225px" height="225px"></Image>
                                </Grid>
                                <Grid item md={1.65}>
                                        <Image src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" width="225px" height="225px"></Image>
                                </Grid>
                                <Grid item md={1.65}>
                                        <Image src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" width="225px" height="225px"></Image>
                                </Grid>
                                </Grid>
                               
                            </Box>
                            <Box>
                                <Grid container md={12} >
                                    <QuestCard title="Why Visit?" contnet="-  Visit Masai Mara for all year round game-viewing with abundant wildlife and exciting moments."></QuestCard>
                                    <QuestCard title="Why Visit?" contnet="-  Visit Masai Mara for all year round game-viewing with abundant wildlife and exciting moments."></QuestCard>
                                </Grid>
                                <Grid md={12}>
                                    <Box sx={{ p: "0px 15px" }}>
                                        <Box sx={{ p: "60px 0px 16px 0px" }}>
                                            <hr className={styles.subpage_hr}></hr>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid md={12}>

                                    <QuestSubTitle title="PLACES YOU MAY VISIT"></QuestSubTitle>

                                </Grid>
                                <Grid container md={12} >
                                    <Grid item md={5.75}></Grid>
                                    <Grid item md={0.5}><hr className={styles.yellow_hr} /></Grid>
                                    <Grid item ></Grid>
                                </Grid>
                                <Box className={styles.row}></Box>
                                
                                <Grid container md={12} >
                                    {news.map((jou) => (
                                        <Grid item md={6} sx={{ pb: "40px" }}>
                                          
                                            <VisitItem url={jou.url} title={jou.title} img={jou.img} content={jou.content} style={styles.lates_new_item} />
                                            
                                        </Grid>
                                    ))}
                                </Grid>
          
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


