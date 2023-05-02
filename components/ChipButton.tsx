import Chip from "@mui/material/Chip";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";

const ChipButton = ({ content }: { content: string }) => {
  return <Chip label={content}></Chip>;
};

export default ChipButton;
