// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD8C93pVqAoMCq8WV6T6KAO2M65LMWDjY",
  authDomain: "netflixgpt-8655d.firebaseapp.com",
  projectId: "netflixgpt-8655d",
  storageBucket: "netflixgpt-8655d.appspot.com",
  messagingSenderId: "755800022501",
  appId: "1:755800022501:web:dff2e79eb69fba0e9de30c",
  measurementId: "G-GD61NKSGX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();