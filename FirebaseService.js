// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAsznILJr4w4_d6pr_7VZvLaseYkuOw-Rk",
  authDomain: "tinder-2-yt-a620a.firebaseapp.com",
  projectId: "tinder-2-yt-a620a",
  storageBucket: "tinder-2-yt-a620a.appspot.com",
  messagingSenderId: "493498053962",
  appId: "1:493498053962:web:c90252b6ea6deedbf3bdb3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { firebaseApp, auth, db};
