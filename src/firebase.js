import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPzMpL1_C9AwLNDPLsHe2MUu6ChLkxUro",
  authDomain: "todoapp-fd927.firebaseapp.com",
  projectId: "todoapp-fd927",
  storageBucket: "todoapp-fd927.appspot.com",
  messagingSenderId: "144018076919",
  appId: "1:144018076919:web:5f2e8f5e7a180a02a7cff2",
  measurementId: "G-RB3EPPY257",
});

firebaseApp
  .firestore()
  .enablePersistence()
  .catch(() => {});

export const firestore = firebaseApp.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
