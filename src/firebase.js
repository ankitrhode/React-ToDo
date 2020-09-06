import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBEN_hmLXZM3Eu8cIpGVsC_qacrOGbXPSA",
  authDomain: "todo-app-5f8a6.firebaseapp.com",
  databaseURL: "https://todo-app-5f8a6.firebaseio.com",
  projectId: "todo-app-5f8a6",
  storageBucket: "todo-app-5f8a6.appspot.com",
  messagingSenderId: "241547816066",
  appId: "1:241547816066:web:366d51b4cda390536dd89b",
});

const db = firebaseApp.firestore();

export default db;
