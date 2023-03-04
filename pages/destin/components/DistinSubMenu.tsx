import {   Link, ListItem, ListItemText, makeStyles, styled } from "@mui/material";
import styles from "@/styles/Home.module.css";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: 'green',
  "&.Mui-checked": {
    color: 'green'
  },
  '& svg[data-testid="RadioButtonCheckedIcon"]': {
    color: 'orange'
  }
}));

export function subMenu({subContent, subLink}:{ subContent: string, subLink: string}) {

  return (
    <ListItem  divider sx={{ borderBottom: 1, borderColor: '#D0C19A', p:"12px 20px 12px 10px" ,borderStyle:'dashed' }} >
        <Link href={subLink} underline="none"  >
          <ListItemText primary={subContent} sx={{ fontSize: '15px' }} />
        </Link>
  </ListItem>
  );
}


const DistimeSubMenu = ({ content, link }: { content: string, link: string }) => {
  return <ListItem  divider sx={{ borderBottom: 1, borderColor: '#D0C19A', p:"12px 20px 12px 10px" }} >
        
        <Link  href={link} underline="none" >
        <ListItemText primary={content}  className={styles.dist_sub_menu_title}  />
        </Link >
       
  </ListItem>;
};

export default DistimeSubMenu;


