import React, { FC } from "react";
import styled from "styled-components";

// Material-UI
import {
  TextField as MuiTextField,
  Paper as MuiPaper,
  Link as MuiLink,
  InputAdornment as MuiInputAdornment,
} from "@mui/material";
import { LockOpenOutlined as MuiLockOpenOutlined } from "@mui/icons-material";
import MuiEmailIcon from "@mui/icons-material/Email";
import MuiLockIcon from "@mui/icons-material/Lock";
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

const Login: FC = () => {
  const classes = useStyles();

  return (
    <>
      <OnlyLogoHeader />
      <Container padding="64px 8px">
        {/* pc, tab */}
        <MuiPaper className={classes.pcLoginForm} elevation={8}>
          <H1TitleWithIcon
            text="LOGIN"
            color="#555"
            fontSize="32px"
            icon={MuiLockOpenOutlined}
            iconColor="primary"
            iconSize="32px"
          />
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
            <MuiTextField
              placeholder="パスワード"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <MuiInputAdornment position="start">
                    <MuiLockIcon />
                  </MuiInputAdornment>
                ),
              }}
            />
            <div className="h-module-spacer--sm" />
            <PrimaryButton text="ログイン" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./signup" underline="none">
              初めての登録ですか？新規登録
            </MuiLink>
            <MuiLink variant="button" href="./reset-password" underline="none">
              パスワードを忘れた場合
            </MuiLink>
          </StyledNavWrap>
        </MuiPaper>

        {/* sp */}
        <div className={classes.loginForm}>
          <H1TitleWithIcon
            text="LOGIN"
            color="#555"
            fontSize="32px"
            icon={MuiLockOpenOutlined}
            iconColor="primary"
            iconSize="32px"
          />
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
            <MuiTextField
              placeholder="パスワード"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <MuiInputAdornment position="start">
                    <MuiLockIcon />
                  </MuiInputAdornment>
                ),
              }}
            />
            <div className="h-module-spacer--sm" />
            <PrimaryButton text="ログイン" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--sm" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./signup" underline="none">
              初めての登録ですか？新規登録
            </MuiLink>
            <MuiLink variant="button" href="./reset-password" underline="none">
              パスワードを忘れた場合
            </MuiLink>
          </StyledNavWrap>
        </div>
      </Container>
    </>
  );
};

export default Login;

const StyledNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
