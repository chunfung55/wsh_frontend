import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

const FooterCard = () => {
  return (
    <center>
      <Grid
        sx={{
          backgroundImage:
            "url(https://www.wildsensesholidays.com/images/enquiry_ban.png)",
        }}
        style={{ backgroundSize: "cover" }}
        maxWidth="1926px"
        minHeight="320px"
        lineHeight="19.5px"
        className={styles.info_content}
      >
        <Box>
          <Typography className={styles.h1_module_title}>
            IF YOU'RE READY TO BOOK, OR JUST NEED MORE INFORMATION...
          </Typography>
          <Button className={styles.comButton_White}>
            <LocalPhoneIcon></LocalPhoneIcon> Speak to our travel specialist
            28138778
          </Button>
          <Button className={styles.comButton_White}>
            <BookmarksIcon></BookmarksIcon> Enquire Online
          </Button>
        </Box>
      </Grid>
    </center>
  );
};
export default FooterCard;
