//Firebase.Google: Getting started with Firebase for the web Video on YouTube & on the Google Firebase site.
// https://firebase.google.com/docs/web/setup?authuser=0&hl=en

/*import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js'; //'firebase/app';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';   //'firebase/auth';
import { getFirestore, collection, getDocs, getDocs, getDoc } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCk1c7S1-SRayX5x402qRt6Kmv1eXTkhJI",
    authDomain: "alpha-note-274ac.firebaseapp.com",
    projectId: "alpha-note-274ac",
    storageBucket: "alpha-note274ac.appspot.com",
    messagingSenderId: "683733177535",
    appId: "1:683733177535:web:3a3312c51ab980863ce20a",
    measurementId: "G-TV6C3Q16HT"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

// Detect auth state

auth.onAuthStateChanged(user => {

});
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('NO --- USER!');
    }
});*/





//clerks Auth for user login info...

import Clerk from '@clerk/clerk-js';

const clerkPublishableKey = pk_test_ZW1pbmVudC1nb2JsaW4tNTQuY2xlcmsuYWNjb3VudHMuZGV2JA;
const clerk = new Clerk(clerkPublishableKey);
await clerk.load({
  // Set load options here...
});

