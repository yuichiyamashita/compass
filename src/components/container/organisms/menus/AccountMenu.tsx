import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Settings from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

import { AppDispatch } from "../../../../store";
import { logout } from "../../../../operation/userAuth";

const SimpleMenu: React.FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickLogout = async (): Promise<void> => {
    dispatch(logout());
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <AccountCircleIcon fontSize="large" sx={{ color: "#8bd5da" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link to="./account">
            <StyledMenuItemBox>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <span>プロフィール</span>
            </StyledMenuItemBox>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to="./settings">
            <StyledMenuItemBox>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <span>設定・変更</span>
            </StyledMenuItemBox>
          </Link>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleClickLogout}>
          <StyledMenuItemBox>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <span>ログアウト</span>
          </StyledMenuItemBox>
        </MenuItem>
      </Menu>
    </>
  );
});

export default SimpleMenu;

const StyledMenuItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
