import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDdqFGK7hLYyXR5WsFXwSl1rmIk9t8idmk',
  authDomain: 'clone-ec77e.firebaseapp.com',
  datablaseURL: 'https://clone-ec77e-default-rtdb.firebaseio.com/',
  projectId: 'clone-ec77e',
  storageBucket: 'clone-ec77e.appspot.com',
  messagingSenderId: '46483466487',
  appId: '1:46483466487:web:5e6fd3fef3be1343668bf2',
  measurementId: 'G-NRYDXTF9LD',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
