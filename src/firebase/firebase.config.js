// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZnhJZlKguWSxnVZydG8e3KFX7JMF99GI",
  authDomain: "b10-assignment-09.firebaseapp.com",
  projectId: "b10-assignment-09",
  storageBucket: "b10-assignment-09.firebasestorage.app",
  messagingSenderId: "519808193671",
  appId: "1:519808193671:web:8e9388b33bc6fa09141422",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;