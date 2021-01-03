import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe-RRqAw4YyCntaXSRZnfTL7EJqKT8KEg",
  authDomain: "infilytics-24de6.firebaseapp.com",
  projectId: "infilytics-24de6",
  storageBucket: "infilytics-24de6.appspot.com",
  messagingSenderId: "146082556837",
  appId: "1:146082556837:web:6608edb6f807a46e06d64c"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
