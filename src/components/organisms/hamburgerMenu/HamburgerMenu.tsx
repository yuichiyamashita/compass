import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Link from "@mui/material/Link";

export default function TemporaryDrawer() {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsOpenMenu(!isOpenMenu);
  };

  const list = () => (
    <Box sx={{ width: 240 }} role="presentation" onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
      <List>
        <ListItem>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <Link href="./login" underline="none" style={{ color: "#555" }}>
            ログイン
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonAddAlt1Icon />
          </ListItemIcon>
          <Link href="./email-authentication" underline="none" style={{ color: "#555" }}>
            会員登録
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Features", "Tutorial", "FAQ", "News"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <MenuIcon fontSize="large" style={{ color: "#8bd5da" }} onClick={toggleDrawer()} />
      <Drawer anchor="right" open={isOpenMenu} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </>
  );
}
