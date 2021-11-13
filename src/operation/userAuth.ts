import { sendSignInLinkToEmail, createUserWithEmailAndPassword } from "@firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { firebaseGetAuth, firebaseGetDb } from "../firebase/firebase";

const auth = firebaseGetAuth();
const db = firebaseGetDb();

// ========================================
// アカウント作成用の認証メールの送信
const url = "http://localhost:3000/signup"; // 認証メールのリンク先URL
const actionCodeSettings = {
  url: url,
  handleCodeInApp: true,
};
export const firebaseSendSignInLinkToEmail = (email: string) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // 送信成功の処理
      window.localStorage.setItem("emailForSignIn", email);
      alert("認証メールを送信しました。");
      // 認証メール送信後の画面に遷移させる
      // window.location.href = '送信後のページurl'
      window.location.href = "./complete-send-auth-email";
    })
    .catch((error) => {
      // 送信失敗の処理
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code: ", errorCode);
      console.log("message: ", errorMessage);
      alert("認証メールの送信に失敗しました。お手数ですが、時間を置いて再度お試しください。");
    });
};

// ====================================================
// アカウント作成
export const firebaseCreateUser = (email: string, password: string) => {
  // Authenticationにユーザー登録
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      if (user) {
        const uid = user.uid;
        // Firestoreにユーザー情報を追加
        await addDoc(collection(db, "users"), {
          uid: uid,
          email: email,
          role: "user",
          //   created_at: Timestamp,
          //   updated_at: Timestamp,
        });
        alert("アカウントが作成されました！");
        window.localStorage.removeItem("emailForSignIn");
        window.location.href = "/login";
      }
    })
    .catch((error) => {
      // ユーザーの作成に失敗
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code: ", errorCode);
      console.log("message: ", errorMessage);
      alert("アカウントの作成に失敗しました。お手数ですが、時間を置いて再度お試しください。");
    });
};
