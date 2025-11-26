// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWiWng0HPAABIXBBl4zwutqZTXNz_ntrw",
  authDomain: "college-project-d5f0f.firebaseapp.com",
  projectId: "college-project-d5f0f",
  storageBucket: "college-project-d5f0f.firebasestorage.app",
  messagingSenderId: "667757714614",
  appId: "1:667757714614:web:a98159690a885be73b1a17",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
