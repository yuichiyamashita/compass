import { initializeApp } from "@firebase/app";
import { Auth, getAuth } from "@firebase/auth";
import { Firestore, getFirestore } from "@firebase/firestore";
import { firebaseConfig } from "./config";

// firebase.initializeApp(firebaseConfig);<
initializeApp(firebaseConfig);

// web v9
export const firebaseGetAuth = (): Auth => getAuth();
export const firebaseGetDb = (): Firestore => getFirestore();
