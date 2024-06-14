// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAvF3282C79n-zCLc2UIsyEmR3Vfd1jnao",
  // authDomain: "dreams-lms-9efcb.firebaseapp.com",
  // projectId: "dreams-lms-9efcb",
  // storageBucket: "dreams-lms-9efcb.appspot.com",
  // messagingSenderId: "69666379066",
  // appId: "1:69666379066:web:49f5d8291105a3fab3ec03"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
