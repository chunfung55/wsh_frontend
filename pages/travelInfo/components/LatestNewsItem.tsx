
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActionArea, CardMedia, Divider, Grid, ImageList, ImageListItem, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
const journeys = [{ url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', imgLink: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', name: 'Giraffe Manor & Kenya Fly-In Safari', btnContent: 'From HKD 47,780/adult' },
{ url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', imgLink: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', name: 'Giraffe Manor & Kenya Fly-In Safari', btnContent: 'From HKD 47,780/adult' },
{ url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', imgLink: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', name: 'Giraffe Manor & Kenya Fly-In Safari', btnContent: 'From HKD 47,780/adult' }];


interface LatesNewsItem {
    url: string,
    title: string,
    img: string,
    content: string
    style: string
}

const LatestNewsItem = (obj:LatesNewsItem) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <Box >
            <Box sx={{ p: '0px 30px 0px 0px', borderTop: '16px' }} >
                <Card elevation={0} sx={{ position: 'relative'}} className={obj.style} onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    <CardActionArea href={obj.url}>
                        <CardMedia
                            component="img"
                            image={obj.img}
                            sx={{
                                ':hover': {
                                    opacity: 0.7,
                                },
                            }}
                        />
                        <Box style={{ position: "absolute", bottom: "5%", left: "0", float: "left" }}>
                            <Typography className={styles.img_content_title} sx={{ p: "10px" }}>{obj.title}</Typography>
                            {isShown && (<>
                                <Divider sx={{ backgroundColor: '#fff' }} />
                                <Typography className={styles.footer_content} sx={{ p: "10px" }}>
                                    {obj.content}
                                </Typography></>
                            )}
                        </Box>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
    );
};

export default LatestNewsItem;


function visitItem(obj:LatesNewsItem){
    const [isShown, setIsShown] = useState(false);
    return(
        <Box>
            <Card elevation={0} sx={{ position: 'relative'}} className={obj.style} onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    <CardActionArea href={obj.url}>
                        <CardMedia
                            component="img"
                            image={obj.img}
                            sx={{
                                ':hover': {
                                    opacity: 0.7,
                                },
                            }}
                        />
                        <Box style={{ position: "absolute", bottom: "5%", left: "0", float: "left" }}>
                            <Typography className={styles.img_content_title} sx={{ p: "10px" }}>{obj.title}</Typography>
                            {isShown && (<>
                                <Divider sx={{ backgroundColor: '#fff' }} />
                                <Typography className={styles.footer_content} sx={{ p: "10px" }}>
                                    {obj.content}
                                </Typography></>
                            )}
                        </Box>
                    </CardActionArea>
            </Card>
        </Box>
    );
}