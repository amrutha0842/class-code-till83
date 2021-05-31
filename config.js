import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBeA7si4lCQL_ZbDabW0kFpaXTGlGtF-9Q",
  authDomain: "booksanta-3c3d4.firebaseapp.com",
  projectId: "booksanta-3c3d4",
  storageBucket: "booksanta-3c3d4.appspot.com",
  messagingSenderId: "246114196078",
  appId: "1:246114196078:web:9c414c4c1bd9e1403d647f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
