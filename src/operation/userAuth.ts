import {
  //   fetchSignInMethodsForEmail,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
} from "@firebase/auth";
import { AppDispatch } from "../app/store";
// import { doc, getDoc, collection } from "@firebase/firestore";

import { firebaseGetAuth } from "../firebase/firebase";
const auth = firebaseGetAuth();

// 登録状況確認処理

// 認証メール送信処理
const callbackUrl = "http://localhost:3000/login";
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

//　認証完了の処理
export const firebaseSignInWithEmailLink = () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    } else {
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
          console.log("successfuly");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Code:", errorCode);
          console.log("Message", errorMessage);
        });
    }
  }
};

// ユーザー情報取得の処理

// パスワード設定の処理
