// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-dd63f.firebaseapp.com",
  projectId: "real-estate-dd63f",
  storageBucket: "real-estate-dd63f.appspot.com",
  messagingSenderId: "885058343431",
  appId: "1:885058343431:web:509114a21ab977f7cb50a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);