// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfrXbBMq0RXhye4DlsM-lJIAjeO6mVIsA",
  authDomain: "openlangweb.firebaseapp.com",
  projectId: "openlangweb",
  storageBucket: "openlangweb.appspot.com",
  messagingSenderId: "443567752530",
  appId: "1:443567752530:web:b48882ba94f8e0f32ea68b",
  measurementId: "G-ENBRT8ETVX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}

