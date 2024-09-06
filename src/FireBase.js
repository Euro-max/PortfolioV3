// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNG6TwFdbrm1pP0MypNHCq0KE6dLVMe5I",
  authDomain: "portfolio-eeaa7.firebaseapp.com",
  projectId: "portfolio-eeaa7",
  storageBucket: "portfolio-eeaa7.appspot.com",
  messagingSenderId: "294620867866",
  appId: "1:294620867866:web:218ba4920d1f543b4090a3"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 const auth=getAuth()

const db=getFirestore();
export{db,auth}