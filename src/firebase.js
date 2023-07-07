import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyDa5CPnwwff5qe_-VV0e4KJO-J70cL1dZA",
    authDomain: "reli-solutions-inc.firebaseapp.com",
    projectId: "reli-solutions-inc",
    storageBucket: "reli-solutions-inc.appspot.com",
    messagingSenderId: "267873578295",
    appId: "1:267873578295:web:e20daca05d0df508e7beb2",
    measurementId: "G-JRKKEW1CZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)