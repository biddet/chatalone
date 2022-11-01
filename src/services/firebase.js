import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
const firebaseConfig = {
 apiKey: "AIzaSyA-viVOYmo-jwZzoAgGKtUyj7XT1vvjHmc",
  authDomain: "yunol-321d8.firebaseapp.com",
  databaseURL: "https://yunol-321d8-default-rtdb.firebaseio.com",
  projectId: "yunol-321d8",
  storageBucket: "yunol-321d8.appspot.com",
  messagingSenderId: "871582088946",
  appId: "1:871582088946:web:7dcd6ab39c88737adeda6b",
  measurementId: "G-J18MZDTH6Z"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
export const firestore = firebase.firestore();
