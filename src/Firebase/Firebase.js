// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, getiFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCVTXBSEECJD2uM6sWrBDnNE9t7Uc3txdE',
  authDomain: 'insta-clone-ffbe4.firebaseapp.com',
  projectId: 'insta-clone-ffbe4',
  storageBucket: 'insta-clone-ffbe4.appspot.com',
  messagingSenderId: '797676299142',
  appId: '1:797676299142:web:eaebf5c4b90e5d83744207',
  measurementId: 'G-67PV6342HM',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, fireStore, storage };
