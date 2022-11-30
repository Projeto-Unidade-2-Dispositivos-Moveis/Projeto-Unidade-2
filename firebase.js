import { initializeApp } from './node_modules/firebase/app';
import { getFirestore, collection, getDocs, addDoc  } from './node_modules/firebase/firestore/lite';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {

    apiKey: "AIzaSyDAt3iFGVgHDnC2w8nEUWr2Tl8ZGGl7Uco",
  
    authDomain: "bruno-ect-2525-2022-2.firebaseapp.com",
  
    projectId: "bruno-ect-2525-2022-2",
  
    storageBucket: "bruno-ect-2525-2022-2.appspot.com",
  
    messagingSenderId: "179837118628",
  
    appId: "1:179837118628:web:64cb5f8d7bb8e4c6081e31",
  
    measurementId: "G-WS581737G4"
  
  };
  
  
  // Initialize Firebase
// Use this to initialize the firebase App

// Use these for db & auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc }