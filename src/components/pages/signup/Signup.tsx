import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Paper as MuiPaper, Link as MuiLink } from "@mui/material";
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
import { validateInputPassWord } from "../../../functions/validations";

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
  errorMessage: boolean;
};

const Signup: FC = () => {
  const classes = useStyles();

  const [values, setValues] = useState<UserInput>({
    email: "",
    password: "",
    showPassword: false,
    errorMessage: false,
  });

  // ユーザーの入力情報をstateに保存
  const handleChange =
    (props: keyof UserInput) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValues({ ...values, [props]: e.target.value });
    };

  // パスワード表示のon/offの切り替え処理
  const toggleShowPassword = (): void => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // firebaseにユーザー情報を登録
  const handleSubmitCreateUser = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Validation
    const result = validateInputPassWord(values.password);
    if (result) {
      firebaseCreateUser(values.email, values.password);
    } else {
      setValues({ ...values, errorMessage: true });
    }
  };

  // 認証済みのメールアドレスを取得し、stateに保存
  useEffect(() => {
    const email = window.localStorage.getItem("emailForSignIn");
    if (email) {
      setValues({ ...values, email: email });
    } else {
      setValues({ ...values, email: "エラー：メールアドレスが確認できません" });
    }
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
          <StyledText>ログインに使用するパスワードを入力してください</StyledText>
          <div className="h-module-spacer--md" />

          {values.errorMessage && (
            <>
              <StyledErrorMessage>※パスワードは8文字以上の半角英数字で入力してください</StyledErrorMessage>
              <div className="h-module-spacer--xs" />
            </>
          )}

          <form onSubmit={handleSubmitCreateUser}>
            <StyledDl>
              <StyledDt>メールアドレス:</StyledDt>
              <StyledDd>{values.email}</StyledDd>
            </StyledDl>
            <div className="h-module-spacer--md" />
            <FormControl variant="outlined" fullWidth={true}>
              <OutlinedInput
                placeholder="8文字以上の半角英数字"
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
          <StyledText>ログインに使用するパスワードを入力してください</StyledText>
          <div className="h-module-spacer--xs" />

          {values.errorMessage && (
            <>
              <div className="h-module-spacer--md" />
              <StyledErrorMessage>※パスワードは8文字以上の半角英数字で入力してください</StyledErrorMessage>
              <div className="h-module-spacer--sm" />
            </>
          )}

          <form onSubmit={handleSubmitCreateUser}>
            <StyledDl>
              <StyledDt>メールアドレス:</StyledDt>
              <StyledDd>{values.email}</StyledDd>
            </StyledDl>
            <div className="h-module-spacer--sm" />
            <FormControl variant="outlined" size="small" fullWidth={true}>
              <OutlinedInput
                placeholder="8文字以上の半角英数字"
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
  font-weight: 400;
  @media screen and (min-width: 900px) {
    margin-right: 16px;
  }
`;
const StyledDd = styled.dd`
  overflow-wrap: break-word;
  @media screen and (min-width: 900px) {
    font-size: 20px;
  }
`;
const StyledErrorMessage = styled.p`
  color: #b2102f;
  font-weight: 600;
  text-align: center;
`;
