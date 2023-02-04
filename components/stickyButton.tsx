import Button from "@mui/material/Button";
import '../styles/Home.module.css';
import styles from "../styles/Home.module.css";

const StickyButton = (props:any) =>{
return(
<Button className={styles.comButton_sticky}>{props.children}</Button>)
}
export default StickyButton
