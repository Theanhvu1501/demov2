import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "golf-c3183.firebaseapp.com",
  databaseURL:
    "https://golf-c3183-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "golf-c3183",
  storageBucket: "golf-c3183.appspot.com",
  messagingSenderId: "294379988116",
  appId: "1:294379988116:web:442dc7352314b75ee1c081",
  measurementId: "G-FWRBZH9RV2",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const dbStore = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
