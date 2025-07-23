// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGkEVMMq6L2TpifcZSnYyb1Cpd7Eb5MVw",
  authDomain: "dimple-firebase-ea33c.firebaseapp.com",
  projectId: "dimple-firebase-ea33c",
  storageBucket: "dimple-firebase-ea33c.firebasestorage.app",
  messagingSenderId: "177631279916",
  appId: "1:177631279916:web:3ca6cb5eec8bac90154a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth (app);



