import React, { FC } from "react";
import styled from "styled-components";

// Material-UI
import {
  TextField as MuiTextField,
  Paper as MuiPaper,
  Link as MuiLink,
  InputAdornment as MuiInputAdornment,
} from "@mui/material";
import MuiEmailIcon from "@mui/icons-material/Email";
import MuiAccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

import { OnlyLogoHeader } from "../../organisms/header";
import { Container } from "../../molecules/container";
import { PrimaryButton } from "../../atoms/button";
import { H1TitleWithIcon } from "../../molecules/title-with-icon";

const useStyles = makeStyles({
  loginForm: {
    "@media (min-width: 600px)": {
      display: "none",
    },
  },
  pcLoginForm: {
    display: "none",
    "@media (min-width:600px)": {
      display: "block",
      padding: "64px",
      width: "80%",
      margin: "0 auto",
    },
  },
});

const Signup: FC = () => {
  const classes = useStyles();

  return (
    <>
      <OnlyLogoHeader />
      <Container padding="64px 8px">
        {/* pc, tab */}
        <MuiPaper className={classes.pcLoginForm} elevation={8}>
          <H1TitleWithIcon
            text="SIGN UP"
            color="#555"
            fontSize="32px"
            icon={MuiAccountCircleIcon}
            iconColor="primary"
            iconSize="36px"
          />
          <StyledText>アカウントに使用するメールアドレスを入力してください</StyledText>
          <form>
            <MuiTextField
              placeholder="メールアドレス"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="email"
              InputProps={{
                startAdornment: (
                  <MuiInputAdornment position="start">
                    <MuiEmailIcon />
                  </MuiInputAdornment>
                ),
              }}
            />
          </form>
          <div className="h-module-spacer--sm" />
          <PrimaryButton text="認証メールを送信" color="#fff" background="#8bd5da" />
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./login" underline="none">
              ログインはこちら
            </MuiLink>
          </StyledNavWrap>
        </MuiPaper>

        {/* sp */}
        <div className={classes.loginForm}>
          <H1TitleWithIcon
            text="SIGN UP"
            fontSize="32px"
            icon={MuiAccountCircleIcon}
            iconSize="36px"
            color="#555"
            iconColor="primary"
          />
          <StyledText>アカウントに使用するメールアドレスを入力してください</StyledText>
          <div className="h-module-spacer--xs" />
          <form>
            <MuiTextField
              placeholder="メールアドレス"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              size="small"
              autoComplete="email"
              InputProps={{
                startAdornment: (
                  <MuiInputAdornment position="start">
                    <MuiEmailIcon />
                  </MuiInputAdornment>
                ),
              }}
            />
          </form>
          <div className="h-module-spacer--sm" />
          <PrimaryButton text="認証メールを送信" color="#fff" background="#8bd5da" />
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./login" underline="none">
              ログインはこちら
            </MuiLink>
          </StyledNavWrap>
        </div>
      </Container>
    </>
  );
};

export default Signup;

const StyledNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledText = styled.p`
  text-align: center;
  color: #555;
`;
