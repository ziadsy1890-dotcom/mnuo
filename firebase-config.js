// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// إعدادات Firebase الخاصة بمشروع الفستق
const firebaseConfig = {
  apiKey: "AIzaSyBNy3ZPbr_cVJC2ZUzBVf8jxWdFlABYIiw",
  authDomain: "pista-7a180.firebaseapp.com",
  projectId: "pista-7a180",
  storageBucket: "pista-7a180.firebasestorage.app",
  messagingSenderId: "581989151860",
  appId: "1:581989151860:web:ffb4a82297933ac6f90d21",
  measurementId: "G-MZMW61H7QP"
};

// تهيئة خدمات Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// تصدير الأدوات لاستخدامها في باقي أجزاء الموقع
export { 
  db, 
  auth, 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
