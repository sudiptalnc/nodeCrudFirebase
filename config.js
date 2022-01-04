const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyAcVQ83wcGc15JnrDoktdMJnNFC98OLkG4",
    authDomain: "nodecrud-76919.firebaseapp.com",
    projectId: "nodecrud-76919",
    storageBucket: "nodecrud-76919.appspot.com",
    messagingSenderId: "169106314867",
    appId: "1:169106314867:web:86f8200dab681f7bb33c06",
    measurementId: "G-8JTW5LJVYJ"
  };
  
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Courses = db.collection("Courses");


module.exports = Courses;