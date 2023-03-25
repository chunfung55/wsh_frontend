import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "@/styles/Home.module.css";
import FooterCard from "@/components/FooterCard";
import { CommonPageProps } from "@/interfaces/common";
import BigDivider from "./BigDivider";

const cats = ["FAQ"];
const pages = [
  "What To Prepare Before A Safari",
  "Travelling To Antarctica",
  "Booking with Wild Senses Holidays",
];
const style = {
  width: "100%",
  padding: "0px",
  bgcolor: "background.paper",
};

const PageFrame = ({ children }: CommonPageProps) => {
  return (
    <>
      <Box sx={{ flexgrow: 1 }}>
        <Container sx={{ maxWidth: "85%" }}>
          <Grid container>
            <Grid item md={2.5}>
              <Box className={styles.item15}>
                {cats.map((cat) => (
                  <Box>
                    <Typography
                      sx={{ p: "40px 20px 12px 0px", fontSize: "17px" }}
                      className={styles.dist_menu_title}
                    >
                      {cat}
                    </Typography>
                    <List
                      sx={style}
                      component="nav"
                      aria-label="mailbox folders"
                    >
                      <ListItem sx={{ p: "0px" }}>
                        <ListItemButton sx={{ p: "0px" }}>
                          <ListItemText
                            sx={{ p: "0px" }}
                            primary={
                              <Typography
                                variant="body2"
                                className={styles.page_frame_sub_menu_active}
                                sx={{
                                  fontWeight: "bold",
                                  backgroundColor: "#333333",
                                  p: "12px 20px 12px 0px",
                                }}
                              >
                                Planning A Safari Journey
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider sx={{ bgcolor: "#c5b181", p: "0px" }}></Divider>
                      {pages.map((page) => (
                        <Box>
                          <ListItem sx={{ p: "0px" }}>
                            <ListItemButton sx={{ p: "0px" }}>
                              <ListItemText
                                sx={{ p: "0px" }}
                                primary={
                                  <Typography
                                    variant="body2"
                                    className={styles.page_frame_sub_menu}
                                    sx={{
                                      fontWeight: "bold",
                                      p: "12px 20px 12px 0px",
                                    }}
                                  >
                                    {page}
                                  </Typography>
                                }
                              />
                            </ListItemButton>
                          </ListItem>
                          <Divider sx={{ bgcolor: "#c5b181" }}></Divider>
                        </Box>
                      ))}
                    </List>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid md={9.5} item>
              {children}
            </Grid>
          </Grid>
          <Grid container></Grid>

          <Box className={styles.item15}>
            <Grid item md={12}>
              {" "}
              <BigDivider />
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PageFrame;
