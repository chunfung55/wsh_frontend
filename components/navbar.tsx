import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { createTheme,ThemeProvider, createStyles, makeStyles  } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/Home.module.css';
import GlobalButton from "./GlobalButton";

const pages = ["HOME", "ABOUT SAFARI", "DESTINATIONS","ITINERARIES","TRAVEL INFO","ABOUT US"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[300],
      },
    },
  });

 

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" style={{ background: 'default', boxShadow: 'none'}}>
        <Toolbar>  
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* mobile menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none"},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" >{page}</Typography>
                <svg data-testid="DeleteIcon"></svg>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="center"
          >
          
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleOpenNavMenu}
                sx={{ my: 2, 
                  color: "black", 
                  display: "block" ,  
                  "&:hover": {
                    color: "#d0c19A",
                }}}
              >
                {page}
              </Button>
            ))}
            <Button
              key={"testing"}
              sx={{ my: 2, color: "white", display: "block" }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {"testing"}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                sx:{"backgroundColor": "#d0c19A"}
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
    <Box>
    <GlobalButton></GlobalButton>
    </Box>
    <Button 
sx={{backgroundColor :"#d0c19A",
color:"black",
pt: 1,
pl: 3,
pr: 3,
pd: 2,
borderRadius: '18px',
fontWeight: 'bold',
fontSize: 12,"&:hover": {
  color: "#d0c19A",
  backgroundColor: "#564C4A",
 
},

}}>CONTACT US</Button>

    <Button sx={{ fontSize: 20,
         backgroundColor: 'rgba(255, 255, 255, 0.5)', boxShadow: 2}}>中</Button>
    </ThemeProvider>    
  );
  <Container maxWidth="xl">
          
  </Container>
}
export default Navbar;
