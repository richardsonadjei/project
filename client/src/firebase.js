// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cocoa-final.firebaseapp.com",
  projectId: "cocoa-final",
  storageBucket: "cocoa-final.appspot.com",
  messagingSenderId: "888372848705",
  appId: "1:888372848705:web:852df4a22a6b1bde813ec0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);