import { Link, ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
const SubMenu = ({ content, link }: { content: string; link: string }) => {
  return (
    <ListItem
      className={styles.sub_menu}
      divider
      sx={{ borderBottom: 1, borderColor: "#D0C19A" }}
    >
      <Link href={link} underline="none" color="#564C4A">
        <ListItemText primary={content} sx={{ fontSize: "15px" }} />
      </Link>
    </ListItem>
  );
};

export default SubMenu;
