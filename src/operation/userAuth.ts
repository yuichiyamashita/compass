import { sendSignInLinkToEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { Timestamp, updateDoc, getDoc, doc, setDoc } from "firebase/firestore";
import { firebaseGetAuth, firebaseGetDb } from "../firebase/firebase";
import { toast } from "react-toastify";

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
export const firebaseSendSignInLinkToEmail = async (email: string): Promise<boolean | void> => {
  // 認証メールの送信処理
  const result = await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // 送信成功の処理
      toast.success("認証メールを送信しました", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      window.localStorage.setItem("emailForSignIn", email);
      return true;
    })
    .catch((error) => {
      // 送信失敗の処理
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code: ", errorCode);
      console.log("message: ", errorMessage);
      toast.error("認証メールの送信に失敗しました。恐れ入りますが、時間を置いてから再度お試しください。", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return false;
    });
  return result;
};

// ====================================================
// アカウント作成
export const firebaseCreateUser = async (email: string, password: string): Promise<boolean | void> => {
  // Authenticationにユーザー登録
  const result = await createUserWithEmailAndPassword(auth, email, password)
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
        toast.success("アカウントが作成されました", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        window.localStorage.removeItem("emailForSignIn");
        return true;
      }
    })
    .catch((error) => {
      // ユーザーの作成に失敗
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code: ", errorCode);
      console.log("message: ", errorMessage);
      toast.error("アカウントの作成に失敗しました。恐れ入りますが、時間を置いてから再度お試しください。", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return false;
    });
  return result;
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
            dispatch(loginAction(loginUserData)); // Storeに値をセット
            toast.success("ログインしました", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "colored",
            });

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
