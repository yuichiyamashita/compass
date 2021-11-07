import React, { FC } from "react";
import styled from "styled-components";
import { TextField as MuiTextField, Paper as MuiPaper, Link as MuiLink } from "@mui/material";
import { LockOpenOutlined as MuiLockOpenOutlined } from "@mui/icons-material";
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
      padding: "64px 32px",
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
          <H1TitleWithIcon text="LOGIN" color="#555" icon={MuiLockOpenOutlined} iconSize="large" iconColor="action" />
          <MuiTextField label="メールアドレス" type="email" variant="outlined" fullWidth margin="normal" />
          <MuiTextField label="パスワード" type="password" variant="outlined" fullWidth margin="normal" />
          <div className="h-module-spacer--md" />
          <PrimaryButton text="ログイン" color="#fff" background="#8bd5da" />
          <div className="h-module-spacer--sm" />
          <PrimaryButton text="Googleでログイン" color="#1b66ca" border="1px solid #1b66ca" />
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./signup" underline="none">
              アカウント作成はこちら
            </MuiLink>
            <MuiLink variant="button" href="./signup" underline="none">
              パスワードを忘れた場合はこちら
            </MuiLink>
          </StyledNavWrap>
        </MuiPaper>

        {/* sp */}
        <div className={classes.loginForm}>
          <H1TitleWithIcon text="Login" icon={MuiLockOpenOutlined} iconSize="large" />
          <MuiTextField label="メールアドレス" variant="outlined" fullWidth margin="normal" size="small" />
          <MuiTextField label="パスワード" variant="outlined" fullWidth margin="normal" size="small" />
          <div className="h-module-spacer--sm" />
          <PrimaryButton text="ログイン" color="#8bd5da" border="1px solid #8bd5da" />
          <div className="h-module-spacer--xs" />
          <PrimaryButton text="Googleでログイン" color="#1b66ca" border="1px solid #1b66ca" />
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./signup" underline="none">
              アカウント作成はこちら
            </MuiLink>
            <MuiLink variant="button" href="./signup" underline="none">
              パスワードを忘れた場合はこちら
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
