import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB6h89GBR4mfKfuX5WNoHk3Pc-A6jYAVho",
    authDomain: "brilliantz-edu.firebaseapp.com",
    projectId: "brilliantz-edu",
    storageBucket: "brilliantz-edu.appspot.com",
    messagingSenderId: "1049059338440",
    appId: "1:1049059338440:web:6c2e8701fa5d31c8771dfd"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire