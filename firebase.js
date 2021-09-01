import firebase from 'firebase.app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAB5OG-zDGfKqsCKcawEPnCbaNqA2d3QrU",
  authDomain: "faungshopminderssss.firebaseapp.com",
  projectId: "faungshopminderssss",
  storageBucket: "faungshopminderssss.appspot.com",
  messagingSenderId: "923021478356",
  appId: "1:923021478356:web:a93e1db0a368acd327ae41"
};

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};
