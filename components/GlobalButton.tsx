import Button from "@mui/material/Button";
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
const GlobalButton = ({style , name }:{style:string, name:string}) => {
  return <Button className={style}>{name}</Button>;
};

export default GlobalButton;
