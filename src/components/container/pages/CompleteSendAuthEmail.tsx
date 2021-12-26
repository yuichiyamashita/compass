import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Paper as MuiPaper } from "@mui/material";
import MuiEmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";

import { MuiTheme } from "../../../assets/material-ui";
import { firebaseSendSignInLinkToEmail } from "../../../operation/userAuth";
import { BasicLink, PrimaryButton } from "../../presentational/atoms";
import { BasicTypographyWithIcon } from "../../presentational/molecules";
import { LogoOnlyHeader } from "../organisms";
import { Container } from "../layout";

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

const CompleteSendEmailAuth: FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  // 認証メールの再送信の処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (email) {
      // 認証メールを送信
      await dispatch(firebaseSendSignInLinkToEmail(email));
      setErrorMessage(false);
    } else {
      // エラーメッセージを表示
      setErrorMessage(true);
    }
  };

  // ローカルストレージからメールアドレスを取得し、stateに保存する
  useEffect(() => {
    const localStorageEmail = window.localStorage.getItem("emailForSignIn");
    if (localStorageEmail) {
      setEmail(localStorageEmail);
    }
  }, []);

  return (
    <>
      <LogoOnlyHeader />
      <Container padding="64px 8px">
        {/****** PC, タブレット *******/}
        <MuiPaper className={classes.pcLoginForm} elevation={8}>
          {errorMessage ? (
            <>
              <BasicTypographyWithIcon
                text="再送信エラー"
                color="#555"
                component="h1"
                variant="h3"
                icon={MuiEmailIcon}
                iconColor="primary"
                iconSize="36px"
              />
              <StyledText>認証メールの再送信に失敗しました。</StyledText>
              <StyledText>お手数ですが、以下のリンクより再度メール認証からお願い致します。</StyledText>
              <div className="h-module-spacer--md" />
              <BasicLink
                text="認証メール送信画面へ"
                color="#fff"
                background="#8bd5da"
                fullWidth
                path="./email-authentication"
              />
            </>
          ) : (
            <>
              <BasicTypographyWithIcon
                text="送信完了"
                color="#555"
                component="h1"
                variant="h3"
                icon={MuiEmailIcon}
                iconColor="primary"
                iconSize="36px"
              />
              <StyledText>{email} に認証メールを送信しました。</StyledText>
              <StyledText>メール記載のリンクよりアカウントの作成をお願い致します。</StyledText>
              <StyledText>
                メールが届いていない場合は、迷惑メールなどをご確認の上、以下のボタンより再送信をお試しください。
              </StyledText>
              <div className="h-module-spacer--md" />
              <form onSubmit={handleSubmit}>
                <PrimaryButton text="認証メールを再送信" color="#fff" background="#8bd5da" fullWidth />
              </form>
              <div className="h-module-spacer--md" />
              <StyledNavWrap>
                <Link to="./login">ログイン画面に戻る</Link>
              </StyledNavWrap>
            </>
          )}
        </MuiPaper>

        {/****** スマホ ******/}
        <StyledSpContainer>
          {errorMessage ? (
            <>
              <BasicTypographyWithIcon
                text="再送信エラー"
                color="#555"
                component="h1"
                variant="h3"
                icon={MuiEmailIcon}
                iconColor="primary"
                iconSize="36px"
              />
              <StyledText>認証メールの再送信に失敗しました。</StyledText>
              <StyledText>お手数ですが、以下のリンクより再度メール認証からお願い致します。</StyledText>
              <div className="h-module-spacer--md" />
              <BasicLink
                text="認証メール送信画面へ"
                color="#fff"
                background="#8bd5da"
                fullWidth
                path="./email-authentication"
              />
            </>
          ) : (
            <>
              <BasicTypographyWithIcon
                text="送信完了"
                color="#555"
                component="h1"
                variant="h3"
                icon={MuiEmailIcon}
                iconColor="primary"
                iconSize="36px"
                spacing="xxs"
              />
              <StyledText>{email} に認証メールを送信しました。</StyledText>
              <StyledText>メール記載のリンクよりアカウントの作成をお願い致します。</StyledText>
              <StyledText>
                メールが届いていない場合は、迷惑メールなどをご確認の上、以下のボタンより再送信をお試しください。
              </StyledText>
              <div className="h-module-spacer--md" />
              <form onSubmit={handleSubmit}>
                <PrimaryButton text="認証メールを再送信" color="#fff" background="#8bd5da" fullWidth />
              </form>
              <div className="h-module-spacer--md" />
              <StyledNavWrap>
                <Link to="./login">ログイン画面に戻る</Link>
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
  justify-content: flex-end;
  font-size: 14px;
  color: #666;
`;
const StyledText = styled.p`
  color: #555;
  line-height: 1.5;
  font-size: 16px;
  overflow-wrap: break-word;
  margin-bottom: 8px;
  text-align: center;
`;
