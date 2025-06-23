
//new

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr3leaQBTp7Qk9yWwt6nVfVMHU_URoqqw",
  authDomain: "proplacer-a7cec.firebaseapp.com",
  projectId: "proplacer-a7cec",
  storageBucket: "proplacer-a7cec.firebasestorage.app",
  messagingSenderId: "890802495373",
  appId: "1:890802495373:web:083ee340b8a8c9453b67c4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
export default auth;
