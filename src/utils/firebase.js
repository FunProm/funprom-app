// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjQHKZPnzwNW0dOcLhQphNBcJblNdFmnY",
    authDomain: "fun-prom-zhack21.firebaseapp.com",
    projectId: "fun-prom-zhack21",
    storageBucket: "fun-prom-zhack21.appspot.com",
    messagingSenderId: "1077717883341",
    appId: "1:1077717883341:web:bce079c29a081aaaaa0c84"
};

// Initialize Firebase and Services
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

