import { sendSignInLinkToEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { collection, addDoc, Timestamp, updateDoc, getDoc, doc, setDoc } from "firebase/firestore";
import { AppDispatch } from "../app/store";
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
export const firebaseSendSignInLinkToEmail = (email: string): boolean | void => {
  // 認証メールの送信処理
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // 送信成功の処理
      window.localStorage.setItem("emailForSignIn", email);
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
        await setDoc(doc(db, "users", uid), {
          uid: uid,
          email: email,
          role: "user",
          created_at: Timestamp.now(),
          updated_at: Timestamp.now(),
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

// ====================================================
// ログイン
export const login = (email: string, password: string): void => {
  // Loding開始
  // Validation
  // firebaseからユーザーデータを取得
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      // Storeにユーザーデータを保存する処理
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // ログイン時間の更新処理
          const updateLoginTime = Timestamp.now();
          await updateDoc(docRef, {
            updated_at: updateLoginTime,
          });
          alert("更新！");
        } else {
          alert("ユーザーデータが存在しません。");
        }
      }
      // Mainに遷移させる処理
      // Loding終了
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Loding終了
    });
  // storeにユーザー情報を保存
};
