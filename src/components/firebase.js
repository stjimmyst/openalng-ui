// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyCfrXbBMq0RXhye4DlsM-lJIAjeO6mVIsA",
//   authDomain: "openlangweb.firebaseapp.com",
//   projectId: "openlangweb",
//   storageBucket: "openlangweb.appspot.com",
//   messagingSenderId: "443567752530",
//   appId: "1:443567752530:web:d5e4a8afa3149c722ea68b",
//   measurementId: "G-YFQFGB59TP"
// dfdf};

const firebaseConfig = {
  apiKey: "AIzaSyBTqX_N7s-F8-_mBw1AeimPZB42re5C7hk",
  authDomain: "endless-matter-387302.firebaseapp.com",
  projectId: "endless-matter-387302",
  storageBucket: "endless-matter-387302.appspot.com",
  messagingSenderId: "1057108656456",
  appId: "1:1057108656456:web:163897dd6290b8d5ab737d",
  measurementId: "G-XG00BQ879J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ol_auth = getAuth(app);

export {ol_auth}

