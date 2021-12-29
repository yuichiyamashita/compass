import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Material-UI
import { TextField as MuiTextField, Paper as MuiPaper, InputAdornment as MuiInputAdornment } from "@mui/material";
import MuiEmailIcon from "@mui/icons-material/Email";
import MuiAccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

import { Container } from "../layout";
import { LogoOnlyHeader } from "../organisms";
import { BasicTypographyWithIcon, TextFieldWithIcon } from "../../presentational/molecules";
import { BasicTypography, PrimaryButton } from "../../presentational/atoms";

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

const ResetPassword: FC = () => {
  const classes = useStyles();

  return (
    <>
      <LogoOnlyHeader />
      <Container padding="64px 8px">
        {/* pc, tab */}
        <MuiPaper className={classes.pcLoginForm} elevation={8}>
          <BasicTypographyWithIcon
            text="パスワードの再設定"
            color="#555"
            component="h1"
            variant="h4"
            fontWeight="600"
            icon={MuiAccountCircleIcon}
            iconColor="#555"
            iconSize="32px"
            letterSpacing="3px"
            spacing="xs"
            justify="center"
            alignItems="center"
            margin="0 0 32px"
          />
          <BasicTypography component="p" variant="body1" align="center">
            ご登録のメールアドレスを入力してください
          </BasicTypography>
          <form>
            <TextFieldWithIcon
              label="メールアドレス"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="email"
              onChange={() => console.log("submit!")}
              value="email"
              icon={
                <MuiInputAdornment position="start">
                  <MuiEmailIcon />
                </MuiInputAdornment>
              }
            />
            <div className="h-module-spacer--sm" />
            <PrimaryButton text="再設定のメールを送信" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <Link to="./login">ログイン画面に戻る</Link>
          </StyledNavWrap>
        </MuiPaper>

        {/* sp */}
        <div className={classes.loginForm}>
          <BasicTypographyWithIcon
            text="パスワードの再設定"
            color="#555"
            component="h1"
            variant="h5"
            fontWeight="600"
            icon={MuiAccountCircleIcon}
            iconColor="#555"
            iconSize="32px"
            letterSpacing="3px"
            spacing="xs"
            justify="center"
            alignItems="center"
            margin="0 0 32px"
          />
          <BasicTypography component="p" variant="body1" align="center">
            ご登録のメールアドレスを入力してください
          </BasicTypography>
          <div className="h-module-spacer--xs" />
          <form>
            <TextFieldWithIcon
              label="メールアドレス"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              autoComplete="email"
              onChange={() => console.log("submit!")}
              value="email"
              icon={
                <MuiInputAdornment position="start">
                  <MuiEmailIcon />
                </MuiInputAdornment>
              }
            />
            <div className="h-module-spacer--sm" />
            <PrimaryButton text="再設定のメールを送信" color="#fff" background="#8bd5da" fullWidth />
          </form>
          <div className="h-module-spacer--md" />
          <StyledNavWrap>
            <Link to="./login">ログイン画面に戻る</Link>
          </StyledNavWrap>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;

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
