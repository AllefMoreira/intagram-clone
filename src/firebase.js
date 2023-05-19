import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseConfig = {
  apiKey: "AIzaSyBgNq1iauqS3n-knTBN-8wBPN4_A0GGI6M",
  authDomain: "projeto-instagram-8398d.firebaseapp.com",
  projectId: "projeto-instagram-8398d",
  storageBucket: "projeto-instagram-8398d.appspot.com",
  messagingSenderId: "1091583945975",
  appId: "1:1091583945975:web:30d0e929797941898437f2",
  measurementId: "G-NBTHGNBGEF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { auth, db, storage, functions };