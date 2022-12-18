// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkU6xn623TuS0NNZMxqAtlFCOSNCCB6Wg",
  authDomain: "plata-lu-auth.firebaseapp.com",
  projectId: "plata-lu-auth",
  storageBucket: "plata-lu-auth.appspot.com",
  messagingSenderId: "590758623405",
  appId: "1:590758623405:web:c769f89bf3cf6e31252e24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
