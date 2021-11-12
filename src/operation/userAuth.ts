import {
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { doc, setDoc, collection, addDoc, Timestamp } from "firebase/firestore";
import { firebaseGetAuth, firebaseGetDb } from "../firebase/firebase";

const auth = firebaseGetAuth();
const db = firebaseGetDb();

// 登録状況確認処理
// const listenAuthState

// ========================================
// 認証メール送信処理
const url = "http://localhost:3000/signup"; // 認証メールのリンク先URL
const actionCodeSettings = {
  url: url,
  handleCodeInApp: true,
};
export const firebaseSendSignInLinkToEmail = (email: string) =>
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // 送信成功の処理
      window.localStorage.setItem("emailForSignIn", email);
      alert("認証メールの送信に成功しました。");
      // 認証メール送信後の画面に遷移させる
      // window.location.href = '送信後のページurl'
    })
    .catch((error) => {
      // 送信失敗の処理
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code: ", errorCode);
      console.log("message: ", errorMessage);
    });

// ========================================
// 認証完了の処理
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

// ====================================================
// Firestoreにユーザー情報を登録
export const firebaseCreateUser = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Firestoreにユーザー情報を登録
      const user = userCredential.user;
      if (user) {
        const uid = user.uid;
        await addDoc(collection(db, "users"), {
          uid: uid,
          email: email,
          role: "user",
          created_at: Timestamp,
          updated_at: Timestamp,
        });
        alert("アカウントが作成されました！");
      }
    })
    .catch((error) => {
      // ユーザーの作成に失敗
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code: ", errorCode);
      console.log("message: ", errorMessage);
    });
};

// パスワード設定の処理

// 認証メール送信
// 認証完了
// パスワードの設定
// ログインの処理
// ログイン完了=>ホームページに遷移
