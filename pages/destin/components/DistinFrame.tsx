
import { Box, Container, Grid, List, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import FooterCard from "@/components/FooterCard";
import { CommonPageProps } from "@/interfaces/common";
import DistinSubMenu from "./DistinSubMenu";

const cats = ['AFRICA','REST OF WORLD'] ;
const pages = ['A Day At Safari', 'What time of year is the best for African safari', 'what is the Big 5?', 'The Great Migration'];
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const DistinFrame = ({children }: CommonPageProps) => {
    return (
        <>
            <Box className={styles.row} sx={{ flexgrow: 1 }}>
                <Container maxWidth="false" sx={{ maxWidth: '85%' }}>
                    <Grid container>
                        <Grid item md={2}>
                            <Box >
                            {cats.map((cat) => (
                                <Box>
                                    <Typography sx={{pt:"40px",pb:"20px", fontSize:"17px"}} className={styles.dist_menu_title}>{cat}</Typography>
                                    <List sx={style} component="nav" aria-label="mailbox folders">
                                    {pages.map((page) => (
                                        <DistinSubMenu link="" content={page} ></DistinSubMenu>
                                    ))}
                                </List>
                                </Box>
                            ))}
                            </Box>
                        </Grid>
                        <Grid item md={10}>{children}</Grid>
                    </Grid>
                </Container>

            </Box>
            <FooterCard></FooterCard>
        </>
    );
};

export default DistinFrame;
