import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// Material-UI
import { TextField as MuiTextField, Paper as MuiPaper, InputAdornment as MuiInputAdornment } from "@mui/material";
import { LockOpenOutlined as MuiLockOpenOutlined } from "@mui/icons-material";
import MuiEmailIcon from "@mui/icons-material/Email";
import MuiLockIcon from "@mui/icons-material/Lock";
import { makeStyles } from "@mui/styles";

import { HistoryBackLink, PrimaryButton } from "../../presentational/atoms";
import { BasicTypographyWithIcon, TextFieldWithIcon } from "../../presentational/molecules";
import { LogoOnlyHeader } from "../organisms";
import { Container } from "../layout";

import { login } from "../../../operation/userAuth";
import { validateEmailFormat, validateInputPassWord } from "../../../modules/validations";
import { AppDispatch } from "../../../store";

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
      <LogoOnlyHeader />
      <Container padding="64px 8px">
        {/* pc, tab */}
        <MuiPaper className={classes.pcLoginForm} elevation={8}>
          <BasicTypographyWithIcon
            text="LOGIN"
            color="#555"
            component="h1"
            fontWeight="600"
            variant="h4"
            icon={MuiLockOpenOutlined}
            iconColor="#555"
            iconSize="32px"
            letterSpacing="3px"
            spacing="xs"
            justify="center"
            alignItems="center"
            margin="0 0 32px"
          />

          {values.errorMessage && (
            <>
              <StyledErrorMessage>※メールアドレスまたはパスワードに誤りがあります</StyledErrorMessage>
              <div className="h-module-spacer--xs" />
            </>
          )}

          <form onSubmit={handleSubmit}>
            <TextFieldWithIcon
              label="メールアドレス"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="email"
              onChange={handleChange("email")}
              value={values.email}
              icon={
                <MuiInputAdornment position="start">
                  <MuiEmailIcon />
                </MuiInputAdornment>
              }
            />
            <TextFieldWithIcon
              label="パスワード"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="current-password"
              onChange={handleChange("password")}
              value={values.password}
              icon={
                <MuiInputAdornment position="start">
                  <MuiLockIcon />
                </MuiInputAdornment>
              }
            />
            <div className="h-module-spacer--md" />
            <PrimaryButton text="ログイン" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--md" />
          <HistoryBackLink
            path="./email-authentication"
            text="初めての登録ですか？新規登録"
            fontSize="14px"
            color="#666"
            align="right"
          />
          <div className="h-module-spacer--xs" />
          <HistoryBackLink
            path="./password-reset"
            text="パスワードを忘れた場合"
            fontSize="14px"
            color="#666"
            align="right"
          />
        </MuiPaper>

        {/* sp */}
        <div className={classes.loginForm}>
          <BasicTypographyWithIcon
            text="LOGIN"
            color="#555"
            component="h1"
            fontWeight="600"
            variant="h4"
            icon={MuiLockOpenOutlined}
            iconColor="#555"
            iconSize="32px"
            letterSpacing="3px"
            spacing="xs"
            justify="center"
            alignItems="center"
            margin="0 0 32px"
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
            <PrimaryButton text="ログイン" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--sm" />
          <HistoryBackLink
            path="./email-authentication"
            text="初めての登録ですか？新規登録"
            fontSize="14px"
            color="#666"
            align="right"
          />
          <div className="h-module-spacer--xs" />
          <HistoryBackLink
            path="./password-reset"
            text="パスワードを忘れた場合"
            fontSize="14px"
            color="#666"
            align="right"
          />
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
