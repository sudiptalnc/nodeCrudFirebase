const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyB3blqj0-inaeJipZ7F00BDLpNHpduUhow",
  authDomain: "nodetest-ea322.firebaseapp.com",
  projectId: "nodetest-ea322",
  storageBucket: "nodetest-ea322.appspot.com",
  messagingSenderId: "1056683302238",
  appId: "1:1056683302238:web:6aed792d3ab007515d43cf",
  measurementId: "G-3YXVN0HHWB"
};
  
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Courses = db.collection("Courses");


module.exports = Courses;