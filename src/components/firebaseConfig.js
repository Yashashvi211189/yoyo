import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your Firebase config from step 2
const firebaseConfig = {
  apiKey: "AIzaSyDlAbN4B4OcM60ow9FrygRQdioehdNqLQk",
  authDomain: "yoyo-5d493.firebaseapp.com",
  projectId: "yoyo-5d493",
  storageBucket: "yoyo-5d493.firebasestorage.app",
  messagingSenderId: "605949932354",
  appId: "1:605949932354:web:ce0914589185789d6acedb",
  measurementId: "G-QWE2RBQL35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
