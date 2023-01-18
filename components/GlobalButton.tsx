import Button from "@mui/material/Button";
import '../styles/Home.module.css';
const GlobalButton = (props:any) =>{
return(
<Button 
sx={{backgroundColor :"#d0c19A",
color:"black",
pt: 1,
pl: 3,
pr: 3,
pd: 2,
borderRadius: 0,
fontWeight: 'bold',
fontSize: 12,"&:hover": {
  color: "#d0c19A",
  backgroundColor: "#564C4A",
 
},

}}>CONTACT US</Button>)
}

export default GlobalButton
