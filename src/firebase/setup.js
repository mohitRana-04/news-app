import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const api = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyDCuMxh5-wTwPLsV_BOu5hNXQQYmRtxaM8",
  authDomain: "bbc-clone-cd7fd.firebaseapp.com",
  projectId: "bbc-clone-cd7fd",
  storageBucket: "bbc-clone-cd7fd.appspot.com",
  messagingSenderId: "534193739669",
  appId: "1:534193739669:web:47f32baed9a1d66ca0889c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
