// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB--o1hXSm5fuyvS6j1NlMI0UnjBKxs5FE",
  authDomain: "weather-1af87.firebaseapp.com",
  projectId: "weather-1af87",
  storageBucket: "weather-1af87.appspot.com",
  messagingSenderId: "825768156935",
  appId: "1:825768156935:web:fc270aac5a7c3a28922fa2",
  measurementId: "G-K16FPYVN5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);