// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiuuJZTGpHK4YPFf2VQhGQFmrUl0VGy0M",
  authDomain: "photofolio-6422a.firebaseapp.com",
  projectId: "photofolio-6422a",
  storageBucket: "photofolio-6422a.appspot.com",
  messagingSenderId: "587106811090",
  appId: "1:587106811090:web:65c7bbe1907658e4f1010b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 