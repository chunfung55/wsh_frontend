import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "./navMenu";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import CssBaseline from "@mui/material/CssBaseline";
import styles from "../styles/Home.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Header from "./header";


const pageTitles = ["ABOUT SAFARI","DESTINATIONS","ITINERARIES","TRAVEL INFO","ABOUT US"] ;

const pages = [
  {
    "ABOUT SAFARI":
      ["a day at safari",
        "what time of year is the best for african",
        "what is the big 5?",
        "the great migration",
        "migration map",
        "safari accommodation",]
  },
  {"DESTINATIONS":["KENYA", "TANZANIA"]},
  {"ITINERARIES":["Family Holiday","HoneyMoon"]},
  {"TRAVEL INFO":["Latest News","FAQS"]},
  {"ABOUT US":["Who we are"]},
];
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

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar className={styles.navbar} elevation={0} >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              opacity: [0.9, 0.8, 0.3],
            }}
          >
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
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                  <svg data-testid="DeleteIcon"></svg>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="center"
          >

            <Button className={styles.navbar_button}>HOME</Button>
            {/* {pageTitles.map((pageTitle) => (
              <div key={pageTitle}>
                <Button
                  key={pageTitle}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className={styles.navbar_button}
                >
                  {pageTitle}
                  <ArrowDropDownIcon
                    fontSize="small"
                    className={styles.dropDownIcon}
                  ></ArrowDropDownIcon>
                </Button>
                {pages.{pageTitle}.map((page) => (
                  <NavMenu page={page}></NavMenu>
                ))}
              </div>
            ))} */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
