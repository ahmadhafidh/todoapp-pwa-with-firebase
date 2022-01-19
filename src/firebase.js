import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKEDjvaOEBj99Dx6oFUtFPXYkssSpMI3o",
  authDomain: "todo-d0be8.firebaseapp.com",
  projectId: "todo-d0be8",
  storageBucket: "todo-d0be8.appspot.com",
  messagingSenderId: "202383913189",
  appId: "1:202383913189:web:1cd956d175100dff27a40c",
});

firebaseApp
  .firestore()
  .enablePersistence()
  .catch(() => {});

export const firestore = firebaseApp.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
