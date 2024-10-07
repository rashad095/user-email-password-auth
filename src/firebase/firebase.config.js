// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrjb84XO0YoRUNrLI8kqc60PGtja6f9oE",
  authDomain: "user-email-password-auth-48e19.firebaseapp.com",
  projectId: "user-email-password-auth-48e19",
  storageBucket: "user-email-password-auth-48e19.appspot.com",
  messagingSenderId: "998709233557",
  appId: "1:998709233557:web:7e9d9ca704c6d13646d89c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;