import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

initializeApp(firebaseConfig);

// web v9
export const firebaseGetAuth = (): Auth => getAuth();
export const FirebaseGetDb = (): Firestore => getFirestore();
