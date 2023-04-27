import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "@/styles/Home.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

const currencies = [
  {
    value: "Jan",
    label: "Jan",
  },
  {
    value: "Fed",
    label: "Fed",
  },
  {
    value: "Mar",
    label: "Mar",
  },
  {
    value: "Apr",
    label: "Apr",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "Jun",
    label: "Jun",
  },
  {
    value: "Jul",
    label: "Jul",
  },
  {
    value: "Aug",
    label: "Aug",
  },
];

const year = [
  {
    value: "2023",
    label: "2023",
  },
];
const ContactCard = () => {
  return (
    <Box className={styles.item15}>
      <Grid container md={12} sx={{ p: "20px", backgroundColor: "#D0C09A" }}>
        <Grid item md={6} className={styles.item15}>
          <Grid container md={12} className={styles.item15}>
            <Grid item md={12}>
              <Typography className={styles.contact_card_col}>
                Name *:
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField
                  id="Name"
                  label="Name"
                  variant="outlined"
                  autoFocus
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography className={styles.contact_card_col}>
                Email *:
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField
                  id="Name"
                  label="Email"
                  variant="outlined"
                  autoFocus
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography className={styles.contact_card_col}>
                Telephone Number *:
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField
                  id="Name"
                  label="Telephone Number"
                  variant="outlined"
                  autoFocus
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography className={styles.contact_card_col}>
                Travels period
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField
                  id="outlined-select-currency"
                  select
                  defaultValue=""
                  fullWidth
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
                  fullWidth
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
            <Grid item md={12}>
              <Typography className={styles.contact_card_col}>
                Number of Nights?{" "}
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField
                  id="Number"
                  label="Number"
                  variant="outlined"
                  autoFocus
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Typography className={styles.contact_card_col}>
                Number of People{" "}
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField
                  id="Number"
                  label="Number"
                  variant="outlined"
                  autoFocus
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.contact_card_col}>
                <TextField
                  id="Number"
                  label="Number"
                  variant="outlined"
                  autoFocus
                  fullWidth
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ContactCard;
