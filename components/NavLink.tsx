import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from "../styles/Home.module.css";
import { color } from '@mui/system';

export default function NavLink( { labels }: {labels:  string[]}) {
  const [value, setValue] = React.useState(0);
  const handleClick = (event: { currentTarget: { style: { backgroundColor: string; color: string; }; classList: { add: (arg0: string, arg1: string) => void; }; }; }) => {
    event.currentTarget.style.backgroundColor = '#d0c19A';
    event.currentTarget.style.backgroundColor = '#d0c19A';
    event.currentTarget.style.color = 'white';
    
    event.currentTarget.classList.add('my-class-1', 'my-class-2');
  };

  return (
    <Box>
      <BottomNavigation  sx={{padding: '8px 16px', backgroundColor:'#f0f0f0'}} 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          styles
        }}
       
    >
        {labels.map((label) => (
        <BottomNavigationAction label={label}  onClick={handleClick}  sx={{padding: '8px 16px', backgroundColor:'#fff'}} />
        ))}
      </BottomNavigation>
    </Box>
  );
}