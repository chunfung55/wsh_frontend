import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import "@/styles/Home.module.css";
import styles from "@/styles/Home.module.css";
const QuestCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <Grid item sx={{ p: "0px 15px" }} md={6}>
      <Card>
        <CardHeader
          title={title}
          sx={{ backgroundColor: "#d0c19a7d", p: "12px 20px" }}
          titleTypographyProps={{
            fontSize: "13px",
            color: "#564C4A",
            fontFamily: "Georgia-serif",
          }}
        />
        <CardContent sx={{ p: "20px" }}>
          <Box sx={{ p: "10px 20px", fontSize: "14px" }}>
            {" "}
            <Box
              className={styles.p}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default QuestCard;
