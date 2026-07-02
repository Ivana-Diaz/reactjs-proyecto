// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvQmcj76m16ZsqZj_3vQbJcBOsr3HP9-Y",
  authDomain: "proyecto-react-51352.firebaseapp.com",
  projectId: "proyecto-react-51352",
  storageBucket: "proyecto-react-51352.firebasestorage.app",
  messagingSenderId: "479519981918",
  appId: "1:479519981918:web:f7db9e1d398621e7408fcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };