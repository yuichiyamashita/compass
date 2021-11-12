import React, { FC, useState, useCallback } from "react";
import styled from "styled-components";

import {
  TextField as MuiTextField,
  Paper as MuiPaper,
  Link as MuiLink,
  InputAdornment as MuiInputAdornment,
} from "@mui/material";
import MuiEmailIcon from "@mui/icons-material/Email";
import MuiAccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

import { firebaseSendSignInLinkToEmail } from "../../../operation/userAuth";
import { OnlyLogoHeader } from "../../organisms/header";
import { Container } from "../../molecules/container";
import { PrimaryButton } from "../../atoms/button";
import { H1TitleWithIcon } from "../../molecules/title-with-icon";
import { MuiTheme } from "../../../assets/material-ui";

const useStyles = makeStyles({
  loginForm: {
    [MuiTheme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  pcLoginForm: {
    display: "none",
    [MuiTheme.breakpoints.up("sm")]: {
      display: "block",
      padding: "64px",
      width: "80%",
      margin: "0 auto",
    },
  },
});

const EmailAuth: FC = () => {
  const classes = useStyles();
  const [inputEmail, setInputEmail] = useState<string>("");

  const handleChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputEmail(e.target.value);
    },
    [setInputEmail]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      console.log("送信");

      if (!inputEmail) return;
      // 認証メールの送信処理
      firebaseSendSignInLinkToEmail(inputEmail);
    },
    [inputEmail]
  );

  return (
    <>
      <OnlyLogoHeader />
      <Container padding="64px 8px">
        {/****** PC, タブレット *******/}
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
          <form onSubmit={handleSubmit}>
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
              onChange={handleChangeEmail}
            />
            <div className="h-module-spacer--sm" />
            <PrimaryButton text="認証メールを送信" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./login" underline="none">
              既にアカウントをお持ちの場合はこちら
            </MuiLink>
          </StyledNavWrap>
        </MuiPaper>

        {/****** スマホ ******/}
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
          <form onSubmit={handleSubmit}>
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
              onChange={handleChangeEmail}
            />
          </form>
          <div className="h-module-spacer--sm" />
          <PrimaryButton text="認証メールを送信" color="#fff" background="#8bd5da" fullWidth />
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./login" underline="none">
              既にアカウントを持ちの場合はこちら
            </MuiLink>
          </StyledNavWrap>
        </div>
      </Container>
    </>
  );
};

export default EmailAuth;

const StyledNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledText = styled.p`
  text-align: center;
  color: #555;
`;
