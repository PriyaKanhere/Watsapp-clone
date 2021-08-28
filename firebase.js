import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyC8dCsApdfdodVb_IMNcjHskNICZQyu000",
  authDomain: "whatsapp-clone-39fba.firebaseapp.com",
  projectId: "whatsapp-clone-39fba",
  storageBucket: "whatsapp-clone-39fba.appspot.com",
  messagingSenderId: "16238141179",
  appId: "1:16238141179:web:b9d731e59d7bb945c11a5e"
};

// cheach app is already initialized or not
const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };


  