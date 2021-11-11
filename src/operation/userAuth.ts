import { firebaseGetAuth } from "../firebase/firebase";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const actionCodeSettings = {
  url: "http://localhost:3000/signup",
  handleCodeInApp: true,
};
const auth = firebaseGetAuth();

// 認証メールの送信
export const sendSignInLink = (email: string): void => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      console.log("Success!");
    })
    .catch((error) => {
      console.log(error);
    });
};

// ログイン完了の処理
export const isSignedInWithEmailLink = (): void => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        window.localStorage.removeItem("emailForSignIn");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
