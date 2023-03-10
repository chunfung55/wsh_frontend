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
import { Link, Popover, styled } from "@mui/material";
import { fetchAPI } from "@/lib/api";
import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   const navItemsRespose = await fetchAPI("/navigation/render/main-navigation", {
//     populate: "*",
//   });
//   console.log("navItemsRespose", navItemsRespose);
//   const mainMeun = navItemsRespose.filter((obj) => obj?.parent == null);
//   console.log(mainMeun);
//   return {
//     props: {
//       navItems: mainMeun,
//     },
//   };
// }

// const navItems = [
//   {
//     title: "Home",
//     url: "@/HomePage.tsx",
//     submenu: [],
//   },
//   {
//     title: "ABOUT SAFARI",
//     url: "",
//     submenu: [
//       {
//         subTitle: "a day at safari",
//         subUrl: "web-design",
//       },
//       {
//         subTitle: "what time of year is the best for african",
//         subUrl: "web-dev",
//       },
//       {
//         subTitle: "what is the big 5?",
//         subUrl: "seo",
//       },
//     ],
//   },
//   {
//     title: "DESTINATIONS",
//     url: "@/HomePage.tsx",
//     submenu: [],
//   },
//   {
//     title: "ITINERARIES",
//     url: "@/HomePage.tsx",
//     submenu: [],
//   },
//   {
//     title: "TRAVEL INFO",
//     url: "@/HomePage.tsx",
//     submenu: [],
//   },
//   {
//     title: "ABOUT US",
//     url: "@/HomePage.tsx",
//     submenu: [],
//   },
//   // ...
// ];

function Navbar() {
  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const navItemsRespose = await await fetchAPI(
        "/navigation/render/main-navigation",
        {
          populate: "*",
        }
      );
      console.log("navItemsRespose", navItemsRespose);
      let mainMeuns = navItemsRespose.filter((obj) => obj?.parent == null);
      mainMeuns = mainMeuns.map((obj) => ({ ...obj, submenu: [] }));
      console.log("mainMeun", mainMeuns);
      navItemsRespose.forEach((element) => {
        console.log(element);
        if (element?.parent) {
          let index = 0;
          mainMeuns.forEach((mainMeun) => {
            if (mainMeun.id == element.parent.id) {
              mainMeuns[index].submenu.push(element);
            }
            index++;
          });
        }
      });
      console.log("mainMeun2", mainMeuns);
      setNavItems(mainMeuns);
    }
    fetchData();
  }, []);
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar className={styles.navbar} elevation={0}>
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
              {navItems?.map((navItem) => (
                <MenuItem
                  key={navItem.title}
                  onClick={handleCloseNavMenu}
                  sx={{ p: "8px", width: "100%" }}
                >
                  <Typography textAlign="center">{navItem.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="center"
          >
            {navItems?.map((navItem) => (
              <Box key={navItem.title}>
                <Link
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className={styles.navbar_button}
                  underline="none"
                >
                  {navItem.title}
                  <ArrowDropDownIcon
                    fontSize="small"
                    className={styles.dropDownIcon}
                  />
                </Link>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  elevation={0}
                >
                  {navItem.submenu.map((submenu) => (
                    <Box className={styles.navbar_subMenu} key={submenu.title}>
                      <Typography sx={{ p: 2 }}>
                        <Link
                          href={submenu.url}
                          underline="none"
                          className={styles.navbar_subMenu_font}
                        >
                          {submenu.title}
                        </Link>
                      </Typography>
                    </Box>
                  ))}
                </Popover>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
