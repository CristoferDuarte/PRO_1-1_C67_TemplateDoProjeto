import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCJrYbqiwiuzXF7gOx1zAECuRVgZZKkoDQ",
    authDomain: "cubinho.firebaseapp.com",
    databaseURL: "https://cubinho-default-rtdb.firebaseio.com",
    projectId: "cubinho",
    storageBucket: "cubinho.appspot.com",
    messagingSenderId: "373419264520",
    appId: "1:373419264520:web:719a44da7f57d8d3eadfbd"
  };  

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();