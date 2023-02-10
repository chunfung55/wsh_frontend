import SubMenu from "@/components/subMenu";
import { Box, Container, Grid, List, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import FooterCard from "@/components/FooterCard";
import { CommonPageProps } from "@/interfaces/common";

const pages = ['A Day At Safari', 'What time of year is the best for African safari', 'what is the Big 5?', 'The Great Migration'];
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const AboutFrame = ({children }: CommonPageProps) => {
    return (
        <>
            <Box className={styles.row} sx={{ flexgrow: 1 }}>
                <Container maxWidth="false" sx={{ maxWidth: '85%' }}>
                    <Grid container md={12} lg={12} xl={12}>
                        <Grid item md={2} lg={2} xl={2}>
                            <Box>
                                <List sx={style} component="nav" aria-label="mailbox folders">
                                    {pages.map((page) => (
                                        <SubMenu link="" content={page}></SubMenu>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        <Grid item md={10} lg={10} xl={10} container>{children}</Grid>
                    </Grid>
                </Container>

            </Box>
            <FooterCard></FooterCard>
        </>
    );
};

export default AboutFrame;
