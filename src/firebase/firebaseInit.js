import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyCNYx_3MjhxVSa7Jt7D-z__CZW8QzyI8cg",
    authDomain: "vicarius-partner-platform.firebaseapp.com",
    projectId: "vicarius-partner-platform",
    storageBucket: "vicarius-partner-platform.appspot.com",
    messagingSenderId: "884684781496",
    appId: "1:884684781496:web:a145cce15d66d96a8f014d",
    measurementId: "G-HS4EXBTJXJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export {timestamp};
  export default firebaseApp.firestore()