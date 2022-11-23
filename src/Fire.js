import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJg9sBUCYNs0fbdETz9DoF3hKqrtRYz90",
  authDomain: "react-firebase-trial-54af0.firebaseapp.com",
  projectId: "react-firebase-trial-54af0",
  storageBucket: "react-firebase-trial-54af0.appspot.com",
  messagingSenderId: "485814913424",
  appId: "1:485814913424:web:5e7cf18a4f82a1ef290b15"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();