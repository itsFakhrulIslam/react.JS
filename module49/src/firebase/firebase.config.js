// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHKKt67Bve1jWZuIhvZDuafGbtZFyoO7M",
  authDomain: "reactauthinteg.firebaseapp.com",
  projectId: "reactauthinteg",
  storageBucket: "reactauthinteg.firebasestorage.app",
  messagingSenderId: "681453651942",
  appId: "1:681453651942:web:469b34b307d9d9701fb827",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
