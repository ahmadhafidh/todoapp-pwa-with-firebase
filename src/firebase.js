import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBgLwR8lhv2YVkS3ibVzUrjwJYO8S7tu04',
  authDomain: 'vue-pwa-4e03d.firebaseapp.com',
  projectId: 'vue-pwa-4e03d',
  storageBucket: 'vue-pwa-4e03d.appspot.com',
  messagingSenderId: '319436590530',
  appId: '1:319436590530:web:1bb5583f4aaacf7dc0da5b',
})

firebaseApp
  .firestore()
  .enablePersistence()
  .catch(() => {})

export const firestore = firebaseApp.firestore()
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp
