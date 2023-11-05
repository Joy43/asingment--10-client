// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLgCQt4YrGch_HOlEF8xNcb5TgCSWChgk",
  authDomain: "assingment-11-hotel-mangement.firebaseapp.com",
  projectId: "assingment-11-hotel-mangement",
  storageBucket: "assingment-11-hotel-mangement.appspot.com",
  messagingSenderId: "863370646568",
  appId: "1:863370646568:web:aa1310750d6220b87b111d",
  measurementId: "G-3VNFT3TGDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;