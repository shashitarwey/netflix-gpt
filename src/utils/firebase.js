// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcUn5KBOtbPTKcYHFtvIARAyVNB6jc-ho",
  authDomain: "netflixgpt-e39fd.firebaseapp.com",
  projectId: "netflixgpt-e39fd",
  storageBucket: "netflixgpt-e39fd.firebasestorage.app",
  messagingSenderId: "680268650021",
  appId: "1:680268650021:web:61b7344edb7fd7604111cc",
  measurementId: "G-JNDGVE5CKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();