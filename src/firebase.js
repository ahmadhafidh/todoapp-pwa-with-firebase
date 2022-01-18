import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAvBCaNF6JGJJxF2jwh76IyE0di1KBlkiE",
    authDomain: "todoapp2-f7d61.firebaseapp.com",
    projectId: "todoapp2-f7d61",
    storageBucket: "todoapp2-f7d61.appspot.com",
    messagingSenderId: "544536852063",
    appId: "1:544536852063:web:a255838edbe30fb9fd4dea"
})

firebaseApp
  .firestore()
  .enablePersistence()
  .catch(() => {});

export const firestore = firebaseApp.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;