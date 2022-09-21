import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useCookies } from "react-cookie";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicMenu({
  name,
  setChangePasswordDialogOpen,
  setProfileDialogOpen,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([
    "name",
    "email",
    "jwtToken",
  ]);

  const logout = () => {
    setAnchorEl(null);
    removeCookie("name", { path: "/" });
    removeCookie("email", { path: "/" });
    removeCookie("jwtToken", { path: "/" });
    navigate("/");
  };

  const changePassword = () => {
    setAnchorEl(null);
    setChangePasswordDialogOpen(true);
  };

  const openProfile = () => {
    setAnchorEl(null);
    setProfileDialogOpen(true);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem fontSize="small" onClick={openProfile}>
          <Typography fontSize="small">Profile</Typography>
        </MenuItem>
        <MenuItem fontSize="small" onClick={changePassword}>
          <Typography fontSize="small">Change Password</Typography>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Typography fontSize="small">Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
