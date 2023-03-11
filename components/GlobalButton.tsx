import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";

interface buttonItem {
  cssName: string,
  content: string,
  url: string,
}

const GlobalButton = (butObj:buttonItem) => {
  return <Button href={butObj.url} className={butObj.cssName}>{butObj.content}</Button>;
};

export default GlobalButton;

