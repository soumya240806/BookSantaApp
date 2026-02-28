import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAgXuuMGZ0eXLciu7iwdT7K3wkRiEDLIE0",
  authDomain: "book-santa-application-ca9f5.firebaseapp.com",
  projectId: "book-santa-application-ca9f5",
  storageBucket: "book-santa-application-ca9f5.appspot.com",
  messagingSenderId: "905388327609",
  appId: "1:905388327609:web:1be6e4ba26cb17f6d6d168"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
