import { sendSignInLinkToEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { Timestamp, updateDoc, getDoc, doc, setDoc } from "firebase/firestore";
import { firebaseGetAuth, firebaseGetDb } from "../firebase/firebase";

import { loginAction } from "../features/user/userSlice";
import { AppDispatch } from "../app/store";
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
          latest_login_time: Timestamp.now(),
        });
        alert("アカウントが作成されました");
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
export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch): Promise<boolean | void> => {
    // Loding開始
    // ログイン処理が全て成功したか判定するために結果を格納
    const result = await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          const uid = user.uid;
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            // Firestoreのログイン時間を更新する処理
            const updateLoginTime = Timestamp.now();
            await updateDoc(docRef, {
              latest_login_time: updateLoginTime,
            });

            // Storeにユーザー情報を保存する処理
            const data = docSnap.data();
            const { uid, email, role, created_at, latest_login_time } = data;
            const loginUserData = {
              isSignedIn: true,
              uid: uid,
              email: email,
              role: role,
              created_at: created_at.toDate().toString(),
              latest_login_time: latest_login_time.toDate().toString(),
            };
            dispatch(loginAction(loginUserData));
            // toastify
            // Loding終了
            return true;
          } else {
            alert("予期せぬエラーが発生しました。恐れ入りますが、時間を置いて再度ログインをお試しください。");
            return false;
          }
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return false;
        // Loding終了
      });
    return result;
  };
};
