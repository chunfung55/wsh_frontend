import { Box, Divider, Grid, MenuItem, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "@/styles/Home.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import GlobalButton from "./GlobalButton";


const currencies = [
  {
    value: 'Jan',
    label: 'Jan',
  },
  {
    value: 'Fed',
    label: 'Fed',
  },
  {
    value: 'Mar',
    label: 'Mar',
  },
  {
    value: 'Apr',
    label: 'Apr',
  },
  {
    value: 'May',
    label: 'May',
  },
  {
    value: 'Jun',
    label: 'Jun',
  },
  {
    value: 'Jul',
    label: 'Jul',
  },
  {
    value: 'Aug',
    label: 'Aug',
  },
];

const year = [
  {
    value: '2023',
    label: '2023',
  },
  {
    value: '2024',
    label: '2024',
  },
  {
    value: '2025',
    label: '2025',
  },
];
const ContactCard = () => {
  return (

    <Box className={styles.item15}>
      <Grid container md={12} sx={{ p: "20px", backgroundColor: "#D0C09A" }}>
        <Grid item md={6} className={styles.item15}>
          <Grid container md={12} className={styles.item15}>
            <Grid item md={12}>
              <Typography className={styles.contact_card_col}>Name *:</Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField id="Name" variant="outlined" autoFocus sx={{ width: "380px" }} />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography className={styles.contact_card_col}>Email *:</Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField id="Email" variant="outlined" autoFocus sx={{ width: "380px" }} />
              </Box>
            </Grid>
            <Grid item md={12} >
              <Typography className={styles.contact_card_col}>Telephone Number *:</Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField id="Telephone Number" variant="outlined" autoFocus sx={{ width: "380px" }} />
              </Box>
            </Grid>
            <Grid item md={12} >
              <Typography className={styles.contact_card_col}>Travels period</Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField
                  id="outlined-select-currency"
                  select

                  defaultValue=""
                  sx={{ width: "230px", mr: "20px" }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-select-currency"
                  select

                  defaultValue=""
                  sx={{ width: "230px" }}
                >
                  {year.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} className={styles.item15}>
          <Grid container md={12} className={styles.item15}>
            <Grid item md={12} >
              <Typography className={styles.contact_card_col}>Number of Nights? </Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField id="Night" variant="outlined" autoFocus sx={{ width: "380px" }} />
              </Box>
            </Grid>
            <Grid item md={12} >
              <Typography className={styles.contact_card_col}>Number of People </Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField id="Number" label="Adults*" variant="outlined" autoFocus sx={{ width: "230px", mr: "10px" }} />

                <TextField id="Number" label="Children" variant="outlined" autoFocus sx={{ width: "230px" }} />
              </Box>
            </Grid>
            <Grid item md={12} >
              <Typography className={styles.contact_card_col}>Enquiry</Typography>
            </Grid>
            <Grid item md={12} >
              <Box className={styles.contact_card_col}>
                <TextField placeholder="Anything else you'd like us to know?"
                  multiline
                  rows={5}
                  maxRows={10} id="Night" variant="outlined" autoFocus fullWidth />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container md={12}>
      <Divider sx={{ backgroundColor: "#fff" }} />
        </Grid>              
      <Grid container md={12} sx={{ p: "20px", backgroundColor: "#8e7c73" }}  alignItems="center" justifyContent="center">
       <Box className={styles.contact_header}><Typography className={styles.contact_font_2} >Destination(s) of interest*</Typography></Box>
       <Grid container md={12}>
            <Grid item md={2}  sx={{mb:"30px"}}>
              <Typography className={styles.contact_font_sm}>AFRICA:</Typography>
            </Grid>
            <Grid item md={10}  sx={{mb:"30px"}}>
              <Typography className={styles.contact_card_col}>
              <GlobalButton
              content="Kenya"
              cssName={styles.circleButton}
              url={""}
            ></GlobalButton>
            <GlobalButton
              content="Kenya"
              cssName={styles.circleButton}
              url={""}
            ></GlobalButton>
            <GlobalButton
              content="Kenya"
              cssName={styles.circleButton}
              url={""}
            ></GlobalButton>
              </Typography>
            </Grid>
            <Grid item md={2} sx={{mb:"30px"}}>
              <Typography className={styles.contact_font_sm}>REST OF WORLD:</Typography>
            </Grid>
            <Grid item md={10} sx={{mb:"30px"}}>
            <GlobalButton
              content="Kenya"
              cssName={styles.circleButton}
              url={""}
            ></GlobalButton>
            </Grid>
      </Grid>
      <Grid container md={12} alignItems="center" justifyContent="center">
        <Box sx={{pr:"15px"}}>
          <GlobalButton
              content="send"
              cssName={styles.semiButton}
              url={""}
            ></GlobalButton>
            </Box>
             <GlobalButton
              content="Reset"
              cssName={styles.semiButton2}
              url={""}
            ></GlobalButton>
      </Grid>
      </Grid>
    </Box>
  );
};
export default ContactCard;
