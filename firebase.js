import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyCpSRdUSC-OEDIObVLp27YD3vHqpOZwutw",
    authDomain: "faungwebwebweb.firebaseapp.com",
    projectId: "faungwebwebweb",
    storageBucket: "faungwebwebweb.appspot.com",
    messagingSenderId: "601711744396",
    appId: "1:601711744396:web:2527517792bb73190172a9",
    measurementId: "G-VC94WC656Z"
});

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};
