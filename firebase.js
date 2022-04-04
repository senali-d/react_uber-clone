// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3A7GhB27rUWazQpBOj8F7hwAqWQOTNlU",
  authDomain: "uber-next-clone-live-e24bb.firebaseapp.com",
  projectId: "uber-next-clone-live-e24bb",
  storageBucket: "uber-next-clone-live-e24bb.appspot.com",
  messagingSenderId: "271344864378",
  appId: "1:271344864378:web:4b140f069b33e5c5ce3fc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }