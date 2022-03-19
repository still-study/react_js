import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDR4HKfYkyDAyz1wRSdT7oyMS8AgSYB0bk",
    authDomain: "reactchat-js.firebaseapp.com",
    databaseURL: "https://reactchat-js-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactchat-js",
    storageBucket: "reactchat-js.appspot.com",
    messagingSenderId: "506897147810",
    appId: "1:506897147810:web:ad9d9ca3979beda3abb4fb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();