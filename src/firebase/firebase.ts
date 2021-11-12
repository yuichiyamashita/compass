import { initializeApp } from "@firebase/app";
import { Auth, getAuth } from "@firebase/auth";
import { Firestore, getFirestore } from "@firebase/firestore";
import { firebaseConfig } from "./config";

const firebaseApp = initializeApp(firebaseConfig);

// web v9
export const firebaseGetAuth = (): Auth => getAuth(firebaseApp);
export const firebaseGetDb = (): Firestore => getFirestore(firebaseApp);
