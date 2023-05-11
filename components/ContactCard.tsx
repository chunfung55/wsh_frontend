import {
  Box,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import "../styles/Home.module.css";
import styles from "@/styles/Home.module.css";
import GlobalButton from "./GlobalButton";
import { useTranslation } from "next-i18next";
import React, { useReducer } from "react";
import { DestinationCategorie, FormInputState } from "@/interfaces/common";

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

const initialState: FormInputState = {
  Name: "",
  Email: "",
  Phone: "",
  Month: "",
  Year: "",
  NumberOfNights: "",
  NumberOfAdults: "",
  NumberOfChildren: "",
  PleaseTickWhichCountry: "",
  IsThereAnythingYoudLikeToKetUsKnow: "",
};

const formInputReducer = (
  state: FormInputState,
  action: Partial<FormInputState>
) => {
  return { ...state, ...action };
};

const year = [
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2025",
    label: "2025",
  },
];
const ContactCard = ({
  destinationCategories,
}: {
  destinationCategories: DestinationCategorie[];
}) => {
  const { t } = useTranslation("contact");
  const [formInput, setFormInput] = useReducer(formInputReducer, initialState);
  const handleInput = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setFormInput({ [name]: newValue });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("formInput:");
    console.log(formInput);
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <FormControl>
        <Box className={styles.item15}>
          <Grid
            container
            md={12}
            sx={{ p: "20px", backgroundColor: "#D0C09A" }}
          >
            <Grid item md={6} className={styles.item15}>
              <Grid container md={12} className={styles.item15}>
                <Grid item md={12}>
                  <Typography className={styles.contact_card_col}>
                    {t("name")}
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Box className={styles.contact_card_col}>
                    <TextField
                      id="Name"
                      variant="outlined"
                      autoFocus
                      sx={{ width: "380px" }}
                      name="Name"
                      defaultValue={formInput.Name}
                      onChange={handleInput}
                    />
                  </Box>
                </Grid>
                <Grid item md={12}>
                  <Typography className={styles.contact_card_col}>
                    {t("email")}
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Box className={styles.contact_card_col}>
                    <TextField
                      id="Email"
                      name="Email"
                      variant="outlined"
                      autoFocus
                      sx={{ width: "380px" }}
                      onChange={handleInput}
                    />
                  </Box>
                </Grid>
                <Grid item md={12}>
                  <Typography className={styles.contact_card_col}>
                    {t("telephoneNumber")}
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Box className={styles.contact_card_col}>
                    <TextField
                      id="Phone"
                      name="Phone"
                      variant="outlined"
                      autoFocus
                      sx={{ width: "380px" }}
                      onChange={handleInput}
                    />
                  </Box>
                </Grid>
                <Grid item md={12}>
                  <Typography className={styles.contact_card_col}>
                    {t("travelsPeriod")}
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Box className={styles.contact_card_col}>
                    <TextField
                      id="Month"
                      name="Month"
                      select
                      defaultValue=""
                      sx={{ width: "230px", mr: "20px" }}
                      onChange={handleInput}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="Year"
                      name="Year"
                      select
                      defaultValue=""
                      sx={{ width: "230px" }}
                      onChange={handleInput}
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
                    {t("nameOfNight")}
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Box className={styles.contact_card_col}>
                    <TextField
                      id="NumberOfNights"
                      name="NumberOfNights"
                      variant="outlined"
                      autoFocus
                      sx={{ width: "380px" }}
                      onChange={handleInput}
                    />
                  </Box>
                </Grid>
                <Grid item md={12}>
                  <Typography className={styles.contact_card_col}>
                    {t("numberOfPeople")}
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Box className={styles.contact_card_col}>
                    <Typography>{t("adults")}</Typography>
                    <TextField
                      id="NumberOfAdults"
                      name="NumberOfAdults"
                      variant="outlined"
                      autoFocus
                      sx={{ width: "230px", mr: "10px" }}
                      onChange={handleInput}
                    />
                    <Typography>{t("children")}</Typography>
                    <TextField
                      id="NumberOfChildren"
                      name="NumberOfChildren"
                      variant="outlined"
                      autoFocus
                      sx={{ width: "230px" }}
                      onChange={handleInput}
                    />
                  </Box>
                </Grid>
                <Grid item md={12}>
                  <Typography className={styles.contact_card_col}>
                    {t("enquiry")}
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <Box className={styles.contact_card_col}>
                    <TextField
                      placeholder={t("anythingElseYouLikeUsToKnow")}
                      name="IsThereAnythingYoudLikeToKetUsKnow"
                      multiline
                      rows={5}
                      maxRows={10}
                      id="IsThereAnythingYoudLikeToKetUsKnow"
                      variant="outlined"
                      autoFocus
                      fullWidth
                      onChange={handleInput}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container md={12}>
            <Divider sx={{ backgroundColor: "#fff" }} />
          </Grid>
          <Grid
            container
            md={12}
            sx={{ p: "20px", backgroundColor: "#8e7c73" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box className={styles.contact_header}>
              <Typography className={styles.contact_font_2}>
                {t("destinationOfInterest")}
              </Typography>
            </Box>
            <Grid container md={12}>
              {destinationCategories &&
                destinationCategories.map((all) => (
                  <>
                    {all &&
                      all.attributes.Child_Destination.data.map(
                        (destinationCategorie) => {
                          return (
                            <>
                              <Grid item md={2} sx={{ mb: "30px" }}>
                                <Typography className={styles.contact_font_sm}>
                                  {destinationCategorie.attributes.Name}:
                                </Typography>
                              </Grid>
                              <Grid item md={10} sx={{ mb: "30px" }}>
                                <Typography className={styles.contact_card_col}>
                                  {destinationCategorie.attributes
                                    .Child_Destination.data &&
                                    destinationCategorie.attributes.Child_Destination.data.map(
                                      (destination) => (
                                        <GlobalButton
                                          content={destination.attributes.Name}
                                          cssName={styles.circleButton}
                                          url={""}
                                        ></GlobalButton>
                                      )
                                    )}
                                </Typography>
                              </Grid>
                            </>
                          );
                        }
                      )}
                  </>
                ))}
              {/* <Grid item md={2} sx={{ mb: "30px" }}>
                <Typography className={styles.contact_font_sm}>
                  AFRICA:
                </Typography>
              </Grid>
              <Grid item md={10} sx={{ mb: "30px" }}>
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
              </Grid> */}
              {/* <Grid item md={2} sx={{ mb: "30px" }}>
            <Typography className={styles.contact_font_sm}>
              REST OF WORLD:
            </Typography>
          </Grid>
          <Grid item md={10} sx={{ mb: "30px" }}>
            <GlobalButton
              content="Kenya"
              cssName={styles.circleButton}
              url={""}
            ></GlobalButton>
          </Grid> */}
            </Grid>
            <Grid container md={12} alignItems="center" justifyContent="center">
              <Box sx={{ pr: "15px" }}>
                <GlobalButton
                  content={t("send")}
                  cssName={styles.semiButton}
                  url={""}
                  type={"submit"}
                ></GlobalButton>
              </Box>
              <GlobalButton
                content={t("reset")}
                cssName={styles.semiButton2}
                url={""}
                type={"reset"}
              ></GlobalButton>
            </Grid>
          </Grid>
        </Box>
      </FormControl>
    </form>
  );
};
export default ContactCard;
