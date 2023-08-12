// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6UVlP4AAYDjNbNWeqJLOsHP9itMzgdDA",
    authDomain: "rom-deco.firebaseapp.com",
    projectId: "rom-deco",
    storageBucket: "rom-deco.appspot.com",
    messagingSenderId: "490261679849",
    appId: "1:490261679849:web:907928b50dd85cb8ad6a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)