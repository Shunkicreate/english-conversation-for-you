import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { Persistence } from 'firebase/auth';
import { browserLocalPersistence } from 'firebase/auth';
import { setPersistence } from 'firebase/auth';
import firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth();
auth.setPersistence(browserLocalPersistence)
export const db = getFirestore(firebaseApp);