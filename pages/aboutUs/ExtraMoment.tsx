import React, { useState } from "react";
import Container from "@mui/material/Container";
import { BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, ImageList, ImageListItem, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";

import BigTitle from "@/components/BigTitle";
import FooterCard from "@/components/FooterCard";
import JourneyCard from "@/components/JourneyCard";
import BigDivider from "@/components/BigDivider";
import MomentCard from "./components/momentCard";
const journeys = [{ url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', imgLink: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', name: 'Giraffe Manor & Kenya Fly-In Safari', btnContent: 'From HKD 47,780/adult' },
{ url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', imgLink: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', name: 'Giraffe Manor & Kenya Fly-In Safari', btnContent: 'From HKD 47,780/adult' },
{ url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', imgLink: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', name: 'Giraffe Manor & Kenya Fly-In Safari', btnContent: 'From HKD 47,780/adult' }];

const moments = [{ img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', title: 'RedisPolly: 每次都是圓夢之旅', content: '    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',locatin:'Kenya, Antarctica',author:'Carolyn Shen',date:'May 2017' }];

export default function ExtraMoment() {
    const [isShown, setIsShown] = useState(false);
    return (
        <Box>
            <BigTitle content="EXTRAORDINARY MOMENTS"></BigTitle>
            <Box sx={{ pt: '50px' }}>
                <Container maxWidth="false" sx={{ maxWidth: '85%' }}>
                    <center><Box className={styles.p} sx={{pb:'30px'}}>We would love to show you to a world of experiences you never could have imagined. Below are some of the testimonials by our lovely guests ......</Box></center>
                    <Grid container md={12} sm={12} >
                        {moments.map((mo) => (
                         <MomentCard title={mo.title} content={mo.content} location={mo.locatin} author={mo.author} date={mo.date} img={mo.img}></MomentCard>
                        ))}
                    </Grid>
                    <Grid md={1}></Grid>
                    <BigDivider></BigDivider>
                </Container>
                <BigTitle content="RECOMMENDED JOURNEYS"></BigTitle>
                <Container maxWidth="false" sx={{ maxWidth: '85%' }}>
                    <Grid container md={12} sx={{ pb: "50px" }}>
                        {journeys.map((jou) => (
                            <Grid item md={4}>
                                <Box className={styles.item15} >
                                    <JourneyCard url={jou.url} imgLink={jou.imgLink} name={jou.name} btnContent={jou.btnContent} styleClass={""}></JourneyCard>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <FooterCard></FooterCard>
        </Box>

    );
};
