// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgl8pcESAcyLGzM2bZ2v-gZy5qzxroGIA",
  authDomain: "netflixgpt-f0dbe.firebaseapp.com",
  projectId: "netflixgpt-f0dbe",
  storageBucket: "netflixgpt-f0dbe.firebasestorage.app",
  messagingSenderId: "345033631473",
  appId: "1:345033631473:web:221353a9fa7c0dd04a6b50",
  measurementId: "G-4WFYN146Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();