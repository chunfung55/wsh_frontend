import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
const GlobalButton = ({
  cssClass,
  name,
}: {
  cssClass: string;
  name: string;
}) => {
  return <Button className={cssClass}>{name}</Button>;
};

export default GlobalButton;
