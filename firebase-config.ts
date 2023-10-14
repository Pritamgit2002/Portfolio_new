// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0dLu6Hm4qQuaez5xBoA8qmo6jic-0KiE",
    authDomain: "portfolio-fccf7.firebaseapp.com",
    projectId: "portfolio-fccf7",
    storageBucket: "portfolio-fccf7.appspot.com",
    messagingSenderId: "405390923755",
    appId: "1:405390923755:web:c096e08cae686be71babae",
    measurementId: "G-BW6Z6K18WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { db };