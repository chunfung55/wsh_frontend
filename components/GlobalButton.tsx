import Button from "@mui/material/Button";
<<<<<<< HEAD
import '../styles/Home.module.css';
import styles from "../styles/Home.module.css";

const GlobalButton = ({name}:{name:string}) =>{
    return( <Button className={styles.comButton}>{name}</Button>)
}
export default GlobalButton
=======
import "../styles/Home.module.css";
import styles from "../styles/Home.module.css";

const GlobalButton = ({ name }: { name: string }) => {
  return <Button className={styles.comButton}>{name}</Button>;
};
export default GlobalButton;
>>>>>>> 4c36a36824510b911d10638cc0d78f4257b0e4e0
