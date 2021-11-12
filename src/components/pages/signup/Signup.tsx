import React, { FC, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  TextField as MuiTextField,
  Paper as MuiPaper,
  Link as MuiLink,
  InputAdornment as MuiInputAdornment,
} from "@mui/material";
import MuiEmailIcon from "@mui/icons-material/Email";
import MuiAccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";

import { OnlyLogoHeader } from "../../organisms/header";
import { Container } from "../../molecules/container";
import { PrimaryButton } from "../../atoms/button";
import { H1TitleWithIcon } from "../../molecules/title-with-icon";
import { MuiTheme } from "../../../assets/material-ui";
import { firebaseCreateUser } from "../../../operation/userAuth";

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

type UserInput = {
  email: string;
  password: string;
  showPassword: boolean;
};

const Signup: FC = () => {
  const classes = useStyles();

  const [values, setValues] = useState<UserInput>({
    email: "",
    password: "",
    showPassword: false,
  });

  // ユーザーの入力情報をstateに保存
  const handleChange = useCallback(
    (props: keyof UserInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [props]: e.target.value });
    },
    [values]
  );

  // パスワード表示のon/offの切り替え処理
  const toggleShowPassword = useCallback(() => {
    setValues({ ...values, showPassword: !values.showPassword });
  }, [values]);

  // firebaseAuthとfirestoreにユーザー情報を登録
  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      // signup関数を呼び出す処理
      firebaseCreateUser(values.email, values.password);
    },
    [values]
  );

  // 認証済みのメールアドレスを取得し、stateに保存
  const getLocalStorageEmail = useCallback(() => {
    const getEmail = window.localStorage.getItem("emailForSignIn");
    if (getEmail !== null) {
      setValues({ ...values, email: getEmail });
    }
  }, [values]);

  useEffect(() => {
    getLocalStorageEmail();
  }, []);

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
          <div className="h-module-spacer--md" />
          <StyledText>アカウントに使用するパスワードを入力してください</StyledText>
          <div className="h-module-spacer--md" />
          <form onSubmit={handleSubmit}>
            <StyledDl>
              <StyledDt>メールアドレス:</StyledDt>
              <StyledDd>{values.email}</StyledDd>
            </StyledDl>
            <div className="h-module-spacer--md" />
            <FormControl variant="outlined" fullWidth={true}>
              <OutlinedInput
                placeholder="ここにパスワードを入力"
                id="pc-outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" edge="end" onClick={toggleShowPassword}>
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                autoComplete="new-password"
              />
            </FormControl>
            <div className="h-module-spacer--lg" />
            <PrimaryButton text="アカウント作成" color="#fff" background="#8bd5da" fullWidth />
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
          <StyledText>アカウントに使用するパスワードを入力してください</StyledText>
          <div className="h-module-spacer--xs" />
          <form onSubmit={handleSubmit}>
            <StyledDl>
              <StyledDt>メールアドレス:</StyledDt>
              <StyledDd>{values.email}</StyledDd>
            </StyledDl>
            <div className="h-module-spacer--md" />
            <FormControl variant="outlined" size="small" fullWidth={true}>
              <OutlinedInput
                placeholder="ここにパスワードを入力"
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" edge="end" onClick={toggleShowPassword}>
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                autoComplete="new-password"
              />
            </FormControl>
            <div className="h-module-spacer--lg" />
            <PrimaryButton text="アカウント作成" color="#fff" background="#8bd5da" fullWidth />
          </form>
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

export default Signup;

const StyledNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledText = styled.p`
  text-align: center;
  color: #555;
`;
const StyledDl = styled.dl`
  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
  }
`;
const StyledDt = styled.dt`
  @media screen and (min-width: 900px) {
    margin-right: 16px;
  }
`;
const StyledDd = styled.dd`
  overflow-wrap: break-word;
  @media screen and (min-width: 900px) {
    font-size: 20px;
    font-weight: 600;
  }
`;
