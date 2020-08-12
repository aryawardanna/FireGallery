import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNIebem_EUeuvo2Jv2VUv8qaXXRRztxHI",
    authDomain: "arya-filegram.firebaseapp.com",
    databaseURL: "https://arya-filegram.firebaseio.com",
    projectId: "arya-filegram",
    storageBucket: "arya-filegram.appspot.com",
    messagingSenderId: "97122711474",
    appId: "1:97122711474:web:34a4f404fd3801e5bc96ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };