import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtRBhBIpEW5GKxeLU6l0OWu6gGbWhblBE",
  authDomain: "todoapp-pwa-37ee0.firebaseapp.com",
  projectId: "todoapp-pwa-37ee0",
  storageBucket: "todoapp-pwa-37ee0.appspot.com",
  messagingSenderId: "546606452375",
  appId: "1:546606452375:web:7641d720ff7bcf3992e3d2",
});

firebaseApp
  .firestore()
  .enablePersistence()
  .catch(() => {});

export const firestore = firebaseApp.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
