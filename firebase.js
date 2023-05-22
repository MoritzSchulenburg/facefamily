// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUl_nUUm0hACm7pMfwezlR12LArxOwwQI",
  authDomain: "facefamily-6acba.firebaseapp.com",
  projectId: "facefamily-6acba",
  storageBucket: "facefamily-6acba.appspot.com",
  messagingSenderId: "824893775179",
  appId: "1:824893775179:web:160b02d5bfbb643cb65cce",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
