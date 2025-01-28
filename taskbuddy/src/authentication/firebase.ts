import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8o--P1aM5H5QVL0T4Tki84X3sR24fNsQ",
  authDomain: "task-manager-2c27b.firebaseapp.com",
  projectId: "task-manager-2c27b",
  storageBucket: "task-manager-2c27b.firebasestorage.app",
  messagingSenderId: "797806207913",
  appId: "1:797806207913:web:b638002c39c4822b6fdab8",
  measurementId: "G-FJ9RH989PZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };