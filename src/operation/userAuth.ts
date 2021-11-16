import {
  sendSignInLinkToEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { Timestamp, updateDoc, getDoc, doc, setDoc } from "firebase/firestore";
import { firebaseGetAuth, firebaseGetDb } from "../firebase/firebase";
import { toast } from "react-toastify";

import { loginAction } from "../features/user/userSlice";
import { showLoadingAction, hideLoadingAction } from "../features/notification/notificationSlice";
import { AppDispatch } from "../app/store";
import { UserState } from "../types/userState";

const auth = firebaseGetAuth();
const db = firebaseGetDb();

// ========================================
// ユーザーのログイン状態に応じてサービスの利用を制限する
// （ログイン済みの場合はそのユーザー情報を取得し、Storeに保存する）
// ========================================
export const fetchAuthState = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // ログイン済
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // Storeに保存するデータを作成
          const userData = docSnap.data();
          if (userData) {
            const { email, role, created_at, latest_login_time } = userData;
            const loginActionState: UserState = {
              isSignedIn: true,
              uid: uid,
              email: email,
              role: role,
              created_at: created_at,
              latest_login_time: latest_login_time,
            };
            // 作成したデータをStoreに保存
            dispatch(loginAction(loginActionState));
          }
        } else {
          // ユーザーデータが存在しない場合
          // ログイン画面に遷移させる（サービスの利用はできない）
          window.location.href = "/login";
        }
      } else {
        // 未ログイン
        // ログイン画面に遷移させる（サービスの利用はできない）
        window.location.href = "/login";
      }
    });
  };
};

// ========================================
// アカウント作成用の認証メールの送信
// ========================================
const url = "http://localhost:3000/signup"; // 認証メールのリンク先URL
const actionCodeSettings = {
  url: url,
  handleCodeInApp: true,
};
export const firebaseSendSignInLinkToEmail = (email: string) => {
  return async (dispatch: AppDispatch): Promise<boolean | void> => {
    dispatch(showLoadingAction("Loading..."));
    // 認証メールの送信
    //（成功・失敗判定をコンポーネントに渡すために結果をresultに格納）
    const result = await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
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
        dispatch(hideLoadingAction());
        return true;
      })
      .catch(() => {
        const errorMessage = "認証メールの送信に失敗しました。恐れ入りますが、時間を置いてから再度お試しください";
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        dispatch(hideLoadingAction());
        return false;
      });
    return result;
  };
};

// ========================================
// アカウント作成
// ========================================
export const firebaseCreateUser = (email: string, password: string) => {
  return async (dispatch: AppDispatch): Promise<boolean | void> => {
    dispatch(showLoadingAction("Loading..."));
    // ユーザーを作成
    //（成功・失敗判定をコンポーネントに渡すために結果をresultに格納）
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
          dispatch(hideLoadingAction());
          return true;
        }
      })
      .catch(() => {
        dispatch(hideLoadingAction());
        return false;
      });
    return result;
  };
};

// ========================================
// ログイン
// ========================================
export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch): Promise<boolean | void> => {
    dispatch(showLoadingAction("Loading..."));
    // ログイン処理
    //（成功・失敗判定をコンポーネントに渡すために結果をresultに格納）
    const result = await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          const uid = user.uid;
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            // Firestore内のログイン時間を更新する処理
            const updateLoginTime = Timestamp.now();
            await updateDoc(docRef, {
              latest_login_time: updateLoginTime,
            });
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
            dispatch(hideLoadingAction());
            return true;
          } else {
            dispatch(hideLoadingAction());
            return false;
          }
        }
      })
      .catch(() => {
        dispatch(hideLoadingAction());
        return false;
      });
    return result;
  };
};
