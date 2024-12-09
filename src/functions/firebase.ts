// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvqTlFCVCr4NrudwSbtY72iuRfuqCvT2s",
  authDomain: "share-a198e.firebaseapp.com",
  projectId: "share-a198e",
  storageBucket: "share-a198e.firebasestorage.app",
  messagingSenderId: "597004687603",
  appId: "1:597004687603:web:c521f072f90c045f8dff86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }