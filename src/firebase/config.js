// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDA_r3m9wDxa1IWW_jkp7PdekY29tUjo3w",
    authDomain: "journal-app-a760a.firebaseapp.com",
    projectId: "journal-app-a760a",
    storageBucket: "journal-app-a760a.appspot.com",
    messagingSenderId: "929768258703",
    appId: "1:929768258703:web:529b5cb6290def373784fa",
    measurementId: "G-H0K1DEX2CC"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);