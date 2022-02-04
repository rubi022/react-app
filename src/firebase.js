// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByZutfyTl9qAwp9h50KLUji1vnBbWmqFM",
  authDomain: "react-authentication-672ab.firebaseapp.com",
  projectId: "react-authentication-672ab",
  storageBucket: "react-authentication-672ab.appspot.com",
  messagingSenderId: "612444260410",
  appId: "1:612444260410:web:0bb391a97c00e622b54d03",
  measurementId: "G-ZN003ET456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;