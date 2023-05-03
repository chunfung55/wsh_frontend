import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styles from "../styles/Home.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Fade,
  Grid,
  Link,
  Popover,
  Slide,
  styled,
  useScrollTrigger,
} from "@mui/material";
import { fetchAPI } from "@/lib/api";
import { useEffect, useState } from "react";
import Header from "./header";
import { NavBarProps, SampleProps, onClickProps } from "@/interfaces/common";
import { Container } from "@mui/system";

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

function ScrollHide(props: SampleProps) {
  // const { children, window } = props;
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade appear={false} in={!trigger} unmountOnExit>
      <Toolbar>{children}</Toolbar>
    </Fade>
  );
}

function Navbar({ navItems }: NavBarProps) {
  // const [navItems, setNavItems] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const navItemsRespose = await await fetchAPI(
  //       "/navigation/render/main-navigation",
  //       {
  //         populate: "*",
  //       }
  //     );
  //     console.log("navItemsRespose", navItemsRespose);
  //     let mainMeuns = navItemsRespose.filter((obj) => obj?.parent == null);
  //     mainMeuns = mainMeuns.map((obj) => ({ ...obj, submenu: [] }));
  //     console.log("mainMeun", mainMeuns);
  //     navItemsRespose.forEach((element) => {
  //       console.log(element);
  //       if (element?.parent) {
  //         let index = 0;
  //         mainMeuns.forEach((mainMeun) => {
  //           if (mainMeun.id == element.parent.id) {
  //             mainMeuns[index].submenu.push(element);
  //           }
  //           index++;
  //         });
  //       }
  //     });
  //     console.log("mainMeun2", mainMeuns);
  //     setNavItems(mainMeuns);
  //   }
  //   fetchData();
  // }, []);
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

  const [anchorEl, setAnchorEl] = React.useState<
    | (EventTarget[] & HTMLButtonElement[])
    | (EventTarget[] & HTMLSpanElement[])
    | []
  >([]);

  // Instead of tracking a single element, set the element according to
  // the menu item's index.
  const handleClick = (
    index: number,
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const tmpAnchorEl = [...anchorEl];
    tmpAnchorEl[index] = event.currentTarget;
    setAnchorEl(tmpAnchorEl);
  };

  const handleClose = () => {
    setAnchorEl([]);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <Container>
        <AppBar className={styles.navbar} color="transparent" elevation={0}>
          <ScrollHide {...navItems}>
            <Header />
          </ScrollHide>
          <Toolbar sx={{ bgcolor: "#ffffff40" }}>
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
                    <Typography textAlign="center">
                      <Link href={"/"}>{navItem.title}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              justifyContent="center"
            >
              {navItems?.map((navItem, index) => {
                // console.log("navItem", navItem);
                if (navItem?.submenu?.length > 0) {
                  return (
                    <Box key={navItem.title}>
                      <Button>
                        <Link
                          id="basic-button"
                          // aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          // aria-expanded={open ? "true" : undefined}
                          onClick={(e) => handleClick(index, e)}
                          // onClose={(e) => {
                          //   handleClose(e);
                          // }}
                          className={styles.navbar_button}
                          underline="none"
                        >
                          {navItem.title}
                          <ArrowDropDownIcon
                            fontSize="small"
                            className={styles.dropDownIcon}
                          />
                        </Link>
                      </Button>
                      <SubMenu
                        id="basic-menu"
                        anchorEl={anchorEl && anchorEl[index]}
                        keepMounted
                        open={Boolean(anchorEl && anchorEl[index])}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                          sx: { py: "0px", boxShadow: 0 },
                          
                        }}
                      >
                        <Box className={styles.navbar_subMenu}>
                          {navItem.submenu.map((submenu, submenuindex) => {
                            return (
                              <MenuItem
                                className={styles.navbar_subMenu_font}
                                key={submenuindex}
                                onClick={handleClose}
                              >
                                <Link
                                  href={submenu.path}
                                  underline="none"
                                  className={styles.navbar_button}
                                >
                                  {submenu.title}
                                </Link>
                              </MenuItem>
                            );
                          })}
                        </Box>
                      </SubMenu>
                    </Box>
                  );
                } else {
                  return (
                    <Button>
                      <Link
                        id="basic-button"
                        // aria-controls={
                        //   open ? "basic-menu" : undefined
                        // }
                        aria-haspopup="true"
                        // aria-expanded={
                        //   open ? "true" : undefined
                        // }
                        className={styles.navbar_button}
                        underline="none"
                      >
                        {navItem.title}
                      </Link>
                    </Button>
                  );
                }
              })}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
export default Navbar;

const SubMenu = styled(Menu)({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "lightblue",
    },
  },
});
