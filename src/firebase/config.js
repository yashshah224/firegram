import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDC3sygfwwDDdndKx9Z3diNWHfMoS5tsEk",
    authDomain: "ninja-firegram-4c8cc.firebaseapp.com",
    databaseURL: "https://ninja-firegram-4c8cc.firebaseio.com",
    projectId: "ninja-firegram-4c8cc",
    storageBucket: "ninja-firegram-4c8cc.appspot.com",
    messagingSenderId: "845370379551",
    appId: "1:845370379551:web:7536ed10e7ea1e631eb42a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };