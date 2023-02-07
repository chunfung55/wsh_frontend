import { MenuItem, Menu } from "@mui/material";
import "../styles/Home.module.css";
import * as React from "react";

const NavMenu = ({ page }: { page: string }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { backgroundColor: "#d0c19A" },
        }}
        sx={{ boxShadow: 0 }}
      >
        <MenuItem onClick={handleClose}>{page}</MenuItem>
      </Menu>
    </div>
  );
};
export default NavMenu;
