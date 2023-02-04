
import Button from "@mui/material/Button";
import '../styles/Home.module.css';
import styles from "../styles/Home.module.css";

const GlobalButton = ({name}:{name:string}) =>{
    return( <Button className={styles.comButton}>{name}</Button>)
}
export default GlobalButton
