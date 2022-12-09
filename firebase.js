import { initializeApp } from './node_modules/firebase/app';
import { getFirestore, collection, getDocs, addDoc  } from './node_modules/firebase/firestore/lite';
import { getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import firebase from "firebase/compat";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBS0zjCDQ0EzcwL-warkDuiNHmn6vpzx28",

  authDomain: "projetoddm2.firebaseapp.com",

  projectId: "projetoddm2",

  storageBucket: "projetoddm2.appspot.com",

  messagingSenderId: "950156689864",

  appId: "1:950156689864:web:d739640a48e00982fa80fd",

  measurementId: "G-ZQ7XRC6T6Y"


  
  };
  
  
  // Initialize Firebase
// Use this to initialize the firebase App

// Use these for db & auth

const app = initializeApp(firebaseConfig);
const db=getFirestore();
const storage=getStorage(app);
const auth=getAuth();
firebase.initializeApp(firebaseConfig);

export {db,app,storage,auth,firebase};