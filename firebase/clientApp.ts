// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFWPdKeTLGgOX1wJQNvmeLBQcLETU4O0g",
    authDomain: "waterwizard-bd403.firebaseapp.com",
    projectId: "waterwizard-bd403",
    storageBucket: "waterwizard-bd403.appspot.com",
    messagingSenderId: "845249930395",
    appId: "1:845249930395:web:a136a86ebb106f04a9123e",
    measurementId: "G-S8CP7CDNQE"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();
// Initialize Firebase
export { auth, app } 