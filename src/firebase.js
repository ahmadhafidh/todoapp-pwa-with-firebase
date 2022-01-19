import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiuhU8lJZoRJfol5Qt0OmkmL5qjo9pjqs",
  authDomain: "todo-5c46b.firebaseapp.com",
  projectId: "todo-5c46b",
  storageBucket: "todo-5c46b.appspot.com",
  messagingSenderId: "179920135076",
  appId: "1:179920135076:web:28a1de5676229af69ed731"
})

firebaseApp.firestore().enablePersistence().catch(() => {});

export const firestore = firebaseApp.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;