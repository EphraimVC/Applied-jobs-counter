import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDvZJTUTAya46NAriXCXQU1qyKCstrJ0I",
    authDomain: "worklist-app-44c58.firebaseapp.com",
    databaseURL:
        "https://worklist-app-44c58-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "worklist-app-44c58",
    storageBucket: "worklist-app-44c58.appspot.com",
    messagingSenderId: "355363104278",
    appId: "1:355363104278:web:8692972ce02a563ac33737",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
