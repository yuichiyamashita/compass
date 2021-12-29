import React, { FC, useState } from "react";
import styled from "styled-components";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { TextField as MuiTextField, Paper as MuiPaper, InputAdornment as MuiInputAdornment } from "@mui/material";
import MuiEmailIcon from "@mui/icons-material/Email";
import MuiAccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

import { firebaseSendSignInLinkToEmail } from "../../../operation/userAuth";
import { validateEmailFormat } from "../../../modules/validations";
import { MuiTheme } from "../../../assets/material-ui";
import { BasicTypography, PrimaryButton, HistoryBackLink } from "../../presentational/atoms";
import { Container } from "../layout";
import { BasicTypographyWithIcon } from "../../presentational/molecules";
import { LogoOnlyHeader } from "../organisms";

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
      <LogoOnlyHeader />
      <Container padding="64px 8px">
        {/****** PC, タブレット *******/}
        <MuiPaper className={classes.pcLoginForm} elevation={8}>
          <BasicTypographyWithIcon
            text="SIGN UP"
            color="#555"
            component="h1"
            variant="h4"
            fontWeight="600"
            letterSpacing="3px"
            margin="0 0 32px"
            icon={MuiAccountCircleIcon}
            iconColor="#555"
            iconSize="32px"
            justify="center"
            alignItems="center"
            spacing="xs"
          />
          <BasicTypography component="p" variant="body1" align="center">
            アカウントに使用するメールアドレスを入力してください
          </BasicTypography>
          {/* エラーメッセージ */}
          {values.errorMessage && (
            <>
              <div className="h-module-spacer--sm" />
              <StyledErrorMessage>
                {values.formatErrorMessage && "※正しいメールアドレスを入力してください"}
                {values.sendErrorMessage && (
                  <span>
                    <span>※認証メールの送信に失敗しました。</span>
                    <br />
                    <span>恐れ入りますが、時間を置いてから再度送信をお願いいたします。</span>
                  </span>
                )}
              </StyledErrorMessage>
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
            <PrimaryButton text="認証メールを送信" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--md" />
          <HistoryBackLink
            path="./login"
            text="既にアカウントをお持ちの場合はこちら"
            color="#666"
            fontSize="14px"
            align="right"
          />
        </MuiPaper>

        {/****** スマホ ******/}
        <StyledSpContainer>
          <BasicTypographyWithIcon
            text="SIGN UP"
            component="h1"
            fontWeight="600"
            variant="h4"
            icon={MuiAccountCircleIcon}
            iconSize="34px"
            color="#555"
            iconColor="#555"
            justify="center"
            alignItems="center"
            letterSpacing="3px"
            spacing="xs"
            margin="0 0 32px"
          />
          <BasicTypography component="p" variant="body2" align="center">
            アカウントに使用するメールアドレスを入力してください
          </BasicTypography>
          {/* エラーメッセージ */}
          {values.errorMessage && (
            <>
              <div className="h-module-spacer--sm" />
              <StyledErrorMessage>
                {values.formatErrorMessage && "※正しいメールアドレスを入力してください"}
                {values.sendErrorMessage && (
                  <span>
                    <span>※認証メールの送信に失敗しました。</span>
                    <br />
                    <span>恐れ入りますが、時間を置いてから再度送信をお願いいたします。</span>
                  </span>
                )}
              </StyledErrorMessage>
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
          <HistoryBackLink
            path="./login"
            text="既にアカウントをお持ちの場合はこちら"
            color="#666"
            fontSize="14px"
            align="right"
          />
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
  font-size: 14px;
  color: #666;
`;
const StyledErrorMessage = styled.p`
  text-align: center;
  color: #b2102f;
  font-weight: 600;
`;
