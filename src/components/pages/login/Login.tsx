import React, { FC, useState } from "react";
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

import { PrimaryButton } from "../../atoms/button";
import { H1TitleWithIcon } from "../../molecules/title-with-icon";
import { Container } from "../../molecules/container";
import { OnlyLogoHeader } from "../../organisms/header";

import { login } from "../../../operation/userAuth";

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

type UserInput = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange =
    (props: keyof UserInput) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValues({ ...values, [props]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(values.email, values.password);
  };

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
          <form onSubmit={handleSubmit}>
            <MuiTextField
              placeholder="メールアドレス"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="email"
              onChange={handleChange("email")}
              value={values.email}
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
              onChange={handleChange("password")}
              value={values.password}
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
            <MuiLink variant="button" href="./email-authentication" underline="none">
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
            <MuiLink variant="button" href="./email-authentication" underline="none">
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
