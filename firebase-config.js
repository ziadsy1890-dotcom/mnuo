import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBoQHatPvFXnmCuI1M1UJcUWWQsB7vk3g0",
  authDomain: "pistach-d-alep.firebaseapp.com",
  projectId: "pistach-d-alep",
  storageBucket: "pistach-d-alep.firebasestorage.app",
  messagingSenderId: "288943885593",
  appId: "1:288943885593:web:4737041244be376c274988"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
