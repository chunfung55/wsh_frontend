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
import React, { useEffect, useReducer, useState } from "react";
import {
  ButtonStates,
  DestinationCategorie,
  FormInputState,
} from "@/interfaces/common";
import { saveContactUs } from "@/services/common";

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
  const [buttonStates, setButtonStates] = useState<ButtonStates>({});
  const [submitedForm, setSubmitedForm] = useState<boolean>(false);

  const handleButtonClick = (buttonName: string) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [buttonName]: !prevStates[buttonName],
    }));
  };
  const handleInput = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = evt.target.name;
    const newValue = evt.target.value;

    setFormInput({ [name]: newValue });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      saveContactUs(formInput);
      setSubmitedForm(true);
    } catch {}
  };

  useEffect(() => {
    const PleaseTickWhichCountry = Object.keys(buttonStates)
      .filter(function (key) {
        return buttonStates[key];
      })
      .join(",");
    setFormInput({ PleaseTickWhichCountry: PleaseTickWhichCountry });
  }, [buttonStates]);
  return (
    <>
      {!submitedForm && (
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
                          required
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
                          required
                          type="email"
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
                          required
                          type="tel"
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
                          required
                          type="number"
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
                                    <Typography
                                      className={styles.contact_font_sm}
                                    >
                                      {destinationCategorie.attributes.Name}:
                                    </Typography>
                                  </Grid>
                                  <Grid item md={10} sx={{ mb: "30px" }}>
                                    <Typography
                                      className={styles.contact_card_col}
                                    >
                                      {destinationCategorie.attributes
                                        .Child_Destination.data &&
                                        destinationCategorie.attributes.Child_Destination.data.map(
                                          (destination) => (
                                            <GlobalButton
                                              content={
                                                destination.attributes.Name
                                              }
                                              cssName={
                                                buttonStates[
                                                  destination.attributes.Name
                                                ]
                                                  ? styles.clickedCircleButton
                                                  : styles.circleButton
                                              }
                                              onClick={() =>
                                                handleButtonClick(
                                                  destination.attributes.Name
                                                )
                                              }
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
                </Grid>
                <Grid
                  container
                  md={12}
                  alignItems="center"
                  justifyContent="center"
                >
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
      )}
      {submitedForm && (
        <Grid container sx={{ p: "20px 15px 0px" }}>
          <Grid
            md={12}
            sx={{ p: "0px 15px" }}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={12}>
              <Box className={styles.contact_header}>
                <Typography className={styles.contact_font}>
                  {t("thankyou")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default ContactCard;
