import {
  //   fetchSignInMethodsForEmail,
  sendSignInLinkToEmail,
  //   signInWithEmailLink,
  //   isSignInWithEmailLink,
} from "@firebase/auth";
// import { doc, getDoc, collection } from "@firebase/firestore";

import { firebaseGetAuth } from "../firebase/firebase";
const auth = firebaseGetAuth();

// 登録状況確認処理

// 認証メール送信処理
const callbackUrl = "https://compass-441d8.web.app/login";
const actionCodeSettings = {
  url: callbackUrl,
  handleCodeInApp: true,
};
export const firebaseSendSignInLinkToEmail = (email: string) =>
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // 送信成功の処理
      window.localStorage.setItem("emailForSignIn", email);
      alert("認証メールの送信に成功しました。");
    })
    .catch((error) => {
      // 送信失敗の処理
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code: ", errorCode);
      console.log("message: ", errorMessage);
    });

// ログイン完了の処理

// ユーザー情報取得の処理
