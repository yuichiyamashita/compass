import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

import { userAuthSelector } from "../../../../Selectors";

type Props = {
  contents: {
    to: string;
    text: string;
    icon: React.SVGAttributes<SVGElement>;
  }[];
};

const signedIn = () => (
  <List>
    <ListItem>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <Link to="./logout">ログアウト</Link>
    </ListItem>
  </List>
);
const nonLogin = () => (
  <List>
    <ListItem>
      <ListItemIcon>
        <LoginIcon />
      </ListItemIcon>
      <Link to="./login">ログイン</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonAddAlt1Icon />
      </ListItemIcon>
      <Link to="./email-authentication">会員登録</Link>
    </ListItem>
  </List>
);

const TemporaryDrawer: React.FC<Props> = React.memo((props) => {
  const user = useSelector(userAuthSelector);
  const isSignedIn = user.isSignedIn;
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
        {props.contents.map((content, index) => (
          <Link key={index} to={content.to}>
            <ListItem button>
              <ListItemIcon>{content.icon}</ListItemIcon>
              <ListItemText primary={content.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {isSignedIn ? signedIn() : nonLogin()}
    </Box>
  );

  return (
    <>
      <MenuIcon fontSize="large" style={{ color: "#673ab7" }} onClick={toggleDrawer()} />
      <Drawer anchor="right" open={isOpenMenu} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </>
  );
});

export default TemporaryDrawer;
