import { Box, Container, Grid } from "@mui/material";
import BigTitle from "./BigTitle";
import JourneyCard from "./JourneyCard";
import styles from "../styles/Home.module.css";

function RecomJourneys({
  url,
  imgLink,
  name,
  btnContent,
}: {
  url: string;
  imgLink: string;
  name: string;
  btnContent: string;
}) {
  return (
    <Box className={styles.item15}>
      <JourneyCard
        url={url}
        imgLink={imgLink}
        name={name}
        btnContent={btnContent}
      ></JourneyCard>
    </Box>
  );
}
