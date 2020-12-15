import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLNxxhijWzxE3vhZDe28YHRbtfjCKNjEA",
  authDomain: "cash-88cbf.firebaseapp.com",
  projectId: "cash-88cbf",
  storageBucket: "cash-88cbf.appspot.com",
  messagingSenderId: "581903467802",
  appId: "1:581903467802:web:ac16578d94f1f0851898a3",
  measurementId: "G-KRE40FXLBZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
