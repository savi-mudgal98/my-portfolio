import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDtkT_vUqQQ7D4J9eFk88X6U_6pSjmshp4",
  authDomain: "portfolio-10798.firebaseapp.com",
  projectId: "portfolio-10798",
  storageBucket: "portfolio-10798.appspot.com",
  messagingSenderId: "53408054570",
  appId: "1:53408054570:web:2cea690a8a3d5654923253",
  measurementId: "G-829X9ZGH22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);

