import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
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

const Signup: FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    status: false,
    validate: false,
    alreadyUse: false,
  });

  // ユーザーの入力情報をstateに保存
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  // パスワード表示のon/offの切り替え処理
  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  // firebaseにユーザー情報を登録
  const handleSubmitCreateUser = async (e: React.MouseEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validation
    const validator = validateInputPassWord(password);
    if (!validator) {
      setErrorMessages({ ...errorMessages, status: true, validate: true, alreadyUse: false });
      return;
    }
    // emailチェック
    if (!email) return;

    // Firebaseアカウント作成の成功・失敗判定の処理
    const result = await dispatch(firebaseCreateUser(email, password));
    if (result) {
      setErrorMessages({ ...errorMessages });
      history.push("/login");
    } else {
      setErrorMessages({ ...errorMessages, status: true, validate: false, alreadyUse: true });
    }
  };

  // ローカルストレージからメールアドレスを取得し、stateに保存する
  useEffect(() => {
    const localStorageEmail = window.localStorage.getItem("emailForSignIn");
    if (localStorageEmail) {
      setEmail(localStorageEmail);
    } else {
      alert("認証済みのメールアドレスが存在しません");
      window.location.href = "/email-authentication";
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

          {errorMessages.status && (
            <>
              {errorMessages.validate && (
                <StyledErrorMessage>※パスワードは8文字以上の半角英数字で入力してください</StyledErrorMessage>
              )}
              {errorMessages.alreadyUse && (
                <StyledErrorMessage>※既に使用されているメールアドレスです。</StyledErrorMessage>
              )}
              <div className="h-module-spacer--xs" />
            </>
          )}

          <form onSubmit={handleSubmitCreateUser}>
            <StyledDl>
              <StyledDt>メールアドレス:</StyledDt>
              <StyledDd>{email}</StyledDd>
            </StyledDl>
            {email && (
              <>
                <div className="h-module-spacer--md" />
                <FormControl variant="outlined" fullWidth={true}>
                  <OutlinedInput
                    placeholder="8文字以上の半角英数字"
                    id="pc-outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handleChangePassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" edge="end" onClick={toggleShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    autoComplete="new-password username"
                  />
                </FormControl>
                <div className="h-module-spacer--lg" />
                <PrimaryButton text="アカウント作成" color="#fff" background="#8bd5da" fullWidth />
              </>
            )}
          </form>

          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <Link to="./login">既にアカウントをお持ちの場合はこちら</Link>
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

          {errorMessages.status && (
            <>
              <div className="h-module-spacer--md" />
              {errorMessages.validate && (
                <StyledErrorMessage>※パスワードは8文字以上の半角英数字で入力してください</StyledErrorMessage>
              )}
              {errorMessages.alreadyUse && (
                <StyledErrorMessage>※既に使用されているメールアドレスです。</StyledErrorMessage>
              )}
              <div className="h-module-spacer--sm" />
            </>
          )}

          <form onSubmit={handleSubmitCreateUser}>
            <StyledDl>
              <StyledDt>メールアドレス:</StyledDt>
              <StyledDd>{email}</StyledDd>
            </StyledDl>
            {email && (
              <>
                <div className="h-module-spacer--sm" />
                <FormControl variant="outlined" size="small" fullWidth={true}>
                  <OutlinedInput
                    placeholder="8文字以上の半角英数字"
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handleChangePassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" edge="end" onClick={toggleShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    autoComplete="new-password username"
                  />
                </FormControl>
                <div className="h-module-spacer--lg" />
                <PrimaryButton text="アカウント作成" color="#fff" background="#8bd5da" fullWidth />
              </>
            )}
          </form>

          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./login" underline="none" color={[MuiTheme.palette.primary.dark]}>
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
  font-size: 14px;
  color: #666;
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
