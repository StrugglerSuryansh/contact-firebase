// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf51le30_3iFvhv2Mxs98IOVUm1_GVFzQ",
    authDomain: "contact-app-8b95d.firebaseapp.com",
    projectId: "contact-app-8b95d",
    storageBucket: "contact-app-8b95d.appspot.com",
    messagingSenderId: "736555218856",
    appId: "1:736555218856:web:ebc29619dbc2a07fd94f9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);