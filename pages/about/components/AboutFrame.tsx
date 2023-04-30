import SubMenu from "@/components/subMenu";
import { Box, Container, Grid, List, Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import FooterCard from "@/components/FooterCard";
import { CommonPagePropsNChildren } from "@/interfaces/common";

const pages = [
  "A Day At Safari",
  "What time of year is the best for African safari",
  "what is the Big 5?",
  "The Great Migration",
];
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const AboutFrame = ({ children }: CommonPagePropsNChildren) => {
  return (

    <>
    <Container maxWidth={false}>
      <Box className={styles.row} sx={{ flexgrow: 1 }}>

        <Grid container  sx={{ pt: "40px" }} >
          <Grid item sm={0} md={1} lg={1} xl={1}></Grid>
          <Grid item sm={12} md={2} lg={2} xl={2}  alignItems="center"  justifyContent="center"  direction="column">
            <Box>
              <List sx={style} component="nav" aria-label="mailbox folders">
                {pages.map((page) => (
                  <SubMenu link="" content={page}></SubMenu>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item sm={12} md={9} lg={9} xl={9} alignItems="left"  justifyContent="left"  direction="column" container>
            {children}
          </Grid>
          
        </Grid>

      </Box>

      <FooterCard></FooterCard>
    </Container>
    </>
  );
};

export default AboutFrame;
