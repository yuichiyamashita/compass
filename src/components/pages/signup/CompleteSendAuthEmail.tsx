import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { Paper as MuiPaper, Link as MuiLink } from "@mui/material";
import MuiAccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

import { firebaseSendSignInLinkToEmail } from "../../../operation/userAuth";
import { OnlyLogoHeader } from "../../organisms/header";
import { Container } from "../../molecules/container";
import { PrimaryButton } from "../../atoms/button";
import { H1TitleWithIcon } from "../../molecules/title-with-icon";
import { MuiTheme } from "../../../assets/material-ui";

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

type UserState = {
  email: string;
  errorMessage: boolean;
};

const CompleteSendEmailAuth: FC = () => {
  const classes = useStyles();
  const [values, setValues] = useState<UserState>({
    email: "",
    errorMessage: false,
  });

  // 認証メールの再送信の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (values.email) {
      // 認証メールを送信
      firebaseSendSignInLinkToEmail(values.email);
    } else {
      // エラーメッセージを表示
      setValues({ ...values, errorMessage: true });
    }
  };

  // ローカルストレージからメールアドレスを取得し、stateに保存する
  useEffect(() => {
    const email = window.localStorage.getItem("emailForSignIn");
    if (email) {
      setValues({ ...values, email: email });
    }
  }, []);

  return (
    <>
      <OnlyLogoHeader />
      <Container padding="64px 8px">
        {/****** PC, タブレット *******/}
        <MuiPaper className={classes.pcLoginForm} elevation={8}>
          {values.errorMessage ? (
            <>
              <H1TitleWithIcon
                text="再送信エラー"
                color="#555"
                fontSize="32px"
                icon={MuiAccountCircleIcon}
                iconColor="primary"
                iconSize="36px"
              />
              <StyledText>認証メールの再送信に失敗しました。</StyledText>
              <StyledText>お手数ですが、以下のリンクより再度メール認証からお願い致します。</StyledText>
              <div className="h-module-spacer--md" />
              <PrimaryButton
                text="認証メール送信画面へ"
                color="#fff"
                background="#8bd5da"
                fullWidth
                href="./email-authentication"
              />
            </>
          ) : (
            <>
              <H1TitleWithIcon
                text="送信完了"
                color="#555"
                fontSize="32px"
                icon={MuiAccountCircleIcon}
                iconColor="primary"
                iconSize="36px"
              />
              <StyledText>{values.email}に認証メールを送信しました。</StyledText>
              <StyledText>お手数ですが、メール記載のリンクよりアカウントの作成をお願い致します。</StyledText>
              <StyledText>
                メールが届いていない場合は、迷惑メールなどをご確認の上、以下より再送信をお試しください。
              </StyledText>
              <div className="h-module-spacer--md" />
              <PrimaryButton
                text="認証メールを再送信"
                color="#fff"
                background="#8bd5da"
                fullWidth
                onClick={handleSubmit}
              />
              <div className="h-module-spacer--md" />
              <StyledNavWrap>
                <MuiLink variant="button" href="./login" underline="none">
                  ログイン画面へ
                </MuiLink>
              </StyledNavWrap>
            </>
          )}
        </MuiPaper>

        {/****** スマホ ******/}
        <StyledSpContainer>
          {values.errorMessage ? (
            <>
              <H1TitleWithIcon
                text="再送信エラー"
                color="#555"
                fontSize="32px"
                icon={MuiAccountCircleIcon}
                iconColor="primary"
                iconSize="36px"
              />
              <StyledText>認証メールの再送信に失敗しました。</StyledText>
              <StyledText>お手数ですが、以下のリンクより再度メール認証からお願い致します。</StyledText>
              <div className="h-module-spacer--md" />
              <PrimaryButton
                text="認証メール送信画面へ"
                color="#fff"
                background="#8bd5da"
                fullWidth
                href="./email-authentication"
              />
            </>
          ) : (
            <>
              <H1TitleWithIcon
                text="送信完了"
                color="#555"
                fontSize="32px"
                icon={MuiAccountCircleIcon}
                iconColor="primary"
                iconSize="36px"
              />
              <StyledText>{values.email}に認証メールを送信しました。</StyledText>
              <StyledText>お手数ですが、メール記載のリンクよりアカウントの作成をお願い致します。</StyledText>
              <StyledText>
                メールが届いていない場合は、迷惑メールなどをご確認の上、以下より再送信をお試しください。
              </StyledText>
              <div className="h-module-spacer--md" />
              <PrimaryButton
                text="認証メールを再送信"
                color="#fff"
                background="#8bd5da"
                fullWidth
                onClick={handleSubmit}
              />
              <div className="h-module-spacer--md" />
              <StyledNavWrap>
                <MuiLink variant="button" href="./login" underline="none">
                  ログイン画面へ
                </MuiLink>
              </StyledNavWrap>
            </>
          )}
        </StyledSpContainer>
      </Container>
    </>
  );
};

export default CompleteSendEmailAuth;

const StyledSpContainer = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const StyledNavWrap = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
const StyledText = styled.p`
  text-align: center;
  color: #555;
  line-height: 1.5;
`;
