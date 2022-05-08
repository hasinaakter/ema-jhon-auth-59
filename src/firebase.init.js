// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfGGf94HwpJWNnFTOgd3Q_kZUKpLOVg6Q",
  authDomain: "ema-jhon-auth-59-371ff.firebaseapp.com",
  projectId: "ema-jhon-auth-59-371ff",
  storageBucket: "ema-jhon-auth-59-371ff.appspot.com",
  messagingSenderId: "786868985525",
  appId: "1:786868985525:web:decd1c32f8a111be37e8fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;