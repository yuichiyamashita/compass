import React, { FC, useState } from "react";
import styled from "styled-components";
import { AppDispatch } from "../../../app/store";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
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
import { validateEmailFormat } from "../../../functions/validations";
import { MuiTheme } from "../../../assets/material-ui";
import { PrimaryButton } from "../../atoms/button";
import { Container } from "../../molecules/container";
import { H1TitleWithIcon } from "../../molecules/title-with-icon";
import { OnlyLogoHeader } from "../../organisms/header";

const useStyles = makeStyles({
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

const SendAuthEmail: FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    errorMessage: false,
    formatErrorMessage: false,
    sendErrorMessage: false,
  });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validation
    const email = validateEmailFormat(values.email);
    if (!email) {
      setValues({ ...values, errorMessage: true, formatErrorMessage: true });
    } else {
      const result = await dispatch(firebaseSendSignInLinkToEmail(values.email));
      if (!result) {
        setValues({ ...values, errorMessage: true, sendErrorMessage: true });
      } else {
        setValues({ ...values });
        history.push("./complete-send-auth-email");
      }
    }
  };

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

          {/* エラーメッセージ */}
          {values.errorMessage && (
            <>
              <div className="h-module-spacer--sm" />
              <StyledErrorMessage>※正しいメールアドレスを入力してください</StyledErrorMessage>
            </>
          )}

          <form onSubmit={handleSubmit}>
            <MuiTextField
              placeholder="メールアドレス"
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
            <PrimaryButton text="認証メールを送信" color="#fff" background="#8bd5da" fullWidth onClick={handleSubmit} />
          </form>
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./login" underline="none">
              既にアカウントをお持ちの場合はこちら
            </MuiLink>
          </StyledNavWrap>
        </MuiPaper>

        {/****** スマホ ******/}
        <StyledSpContainer>
          <H1TitleWithIcon
            text="SIGN UP"
            fontSize="32px"
            icon={MuiAccountCircleIcon}
            iconSize="36px"
            color="#555"
            iconColor="primary"
          />
          <StyledText>アカウントに使用するメールアドレスを入力してください</StyledText>
          {/* エラーメッセージ */}
          {values.errorMessage && (
            <>
              <div className="h-module-spacer--sm" />
              <StyledErrorMessage>※正しいメールアドレスを入力してください</StyledErrorMessage>
            </>
          )}

          <div className="h-module-spacer--xs" />
          <form onSubmit={handleSubmit}>
            <MuiTextField
              placeholder="メールアドレス"
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
            <div className="h-module-spacer--sm" />
            <PrimaryButton text="認証メールを送信" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <MuiLink variant="button" href="./login" underline="none">
              既にアカウントを持ちの場合はこちら
            </MuiLink>
          </StyledNavWrap>
        </StyledSpContainer>
      </Container>
    </>
  );
};

export default SendAuthEmail;

const StyledSpContainer = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
const StyledNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledText = styled.p`
  text-align: center;
  color: #555;
`;
const StyledErrorMessage = styled.p`
  text-align: center;
  color: #b2102f;
  font-weight: 600;
`;
