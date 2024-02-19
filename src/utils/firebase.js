// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0xvBvdMdBmv0OPAyRmdtHCX0w0AbMPpQ",
  authDomain: "netflixgpt-clone-74c16.firebaseapp.com",
  projectId: "netflixgpt-clone-74c16",
  storageBucket: "netflixgpt-clone-74c16.appspot.com",
  messagingSenderId: "567882750016",
  appId: "1:567882750016:web:c0bfa5eb87ad12f298a7a5",
  measurementId: "G-PWQTRF54Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);