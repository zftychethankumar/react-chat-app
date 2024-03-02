// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY-hu2i5nBAfFYAHj2MxnAi8FV6GxUGzI",
  authDomain: "chat-app-6fbc8.firebaseapp.com",
  projectId: "chat-app-6fbc8",
  storageBucket: "chat-app-6fbc8.appspot.com",
  messagingSenderId: "574273084501",
  appId: "1:574273084501:web:bb2721c5af5806862f08dc",
  measurementId: "G-CGVBNKEP5D"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);//main app config
 export const auth = getAuth();//aut
 export const storage = getStorage();
 export const db = getFirestore();
//const analytics = getAnalytics(app);