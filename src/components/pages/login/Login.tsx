import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// Material-UI
import { TextField as MuiTextField, Paper as MuiPaper, InputAdornment as MuiInputAdornment } from "@mui/material";
import { LockOpenOutlined as MuiLockOpenOutlined } from "@mui/icons-material";
import MuiEmailIcon from "@mui/icons-material/Email";
import MuiLockIcon from "@mui/icons-material/Lock";
import { makeStyles } from "@mui/styles";

import { PrimaryButton } from "../../atoms/button";
import { H1TitleWithIcon } from "../../molecules/title-with-icon";
import { Container } from "../../molecules/container";
import { OnlyLogoHeader } from "../../organisms/header";

import { login } from "../../../operation/userAuth";
import { validateEmailFormat, validateInputPassWord } from "../../../functions/validations";
import { AppDispatch } from "../../../app/store";

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
  errorMessages: boolean;
};

const Login: FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
    errorMessage: false,
  });

  const handleChange =
    (props: keyof UserInput) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValues({ ...values, [props]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validation
    const email = validateEmailFormat(values.email);
    const password = validateInputPassWord(values.password);
    if (email && password) {
      // ログイン結果を格納
      const result = await dispatch(login(values.email, values.password));
      if (!result) {
        setValues({ ...values, errorMessage: true });
      } else {
        setValues({ ...values, errorMessage: false });
        history.push("/main");
      }
    } else {
      setValues({ ...values, errorMessage: true });
    }
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

          {values.errorMessage && (
            <>
              <StyledErrorMessage>※メールアドレスまたはパスワードに誤りがあります</StyledErrorMessage>
              <div className="h-module-spacer--xs" />
            </>
          )}

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
            <PrimaryButton text="ログイン" color="#fff" background="#673ab7" fullWidth />
          </form>
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <Link to="./email-authentication">初めての登録ですか？新規登録</Link>
            <div className="h-module-spacer--xs" />
            <Link to="./reset-password">パスワードを忘れた場合</Link>
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

          {values.errorMessage && (
            <>
              <StyledErrorMessage>※メールアドレスまたはパスワードに誤りがあります</StyledErrorMessage>
              <div className="h-module-spacer--xs" />
            </>
          )}

          <form onSubmit={handleSubmit}>
            <MuiTextField
              placeholder="メールアドレス"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="email"
              onChange={handleChange("email")}
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
              InputProps={{
                startAdornment: (
                  <MuiInputAdornment position="start">
                    <MuiLockIcon />
                  </MuiInputAdornment>
                ),
              }}
            />
            <div className="h-module-spacer--sm" />
            <PrimaryButton text="ログイン" color="#fff" background="#673ab7" fullWidth />
          </form>
          <div className="h-module-spacer--sm" />
          <StyledNavWrap>
            <Link to="./email-authentication">初めての登録ですか？新規登録</Link>
            <div className="h-module-spacer--xs" />
            <Link to="./reset-password">パスワードを忘れた場合</Link>
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
  font-size: 14px;
  color: #666;
`;
const StyledErrorMessage = styled.p`
  color: #b2102f;
  font-weight: 600;
  text-align: center;
`;
