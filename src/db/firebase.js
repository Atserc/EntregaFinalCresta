import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_KEY}`,
  authDomain: "entregafinal-ch-react.firebaseapp.com",
  projectId: "entregafinal-ch-react",
  storageBucket: "entregafinal-ch-react.appspot.com",
  messagingSenderId: `${process.env.FIREBASE_MESSAGINGSENDERID}`,
  appId: `${process.env.FIREBASE_APPID}`
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);