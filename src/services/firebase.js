import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBCIuPH7piYaCU_uXnS9G40v9xfZvK5FPI",
  authDomain: "chatalone-01.firebaseapp.com",
  projectId: "chatalone-01",
  storageBucket: "chatalone-01.appspot.com",
  messagingSenderId: "703286109506",
  appId: "1:703286109506:web:1c346be652d80d699e14db",
  measurementId: "G-TPWQGG6GRF"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
export const firestore = firebase.firestore();
