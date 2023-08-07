
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

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