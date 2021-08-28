import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8dCsApdfdodVb_IMNcjHskNICZQyu000",
  authDomain: "whatsapp-clone-39fba.firebaseapp.com",
  projectId: "whatsapp-clone-39fba",
  storageBucket: "whatsapp-clone-39fba.appspot.com",
  messagingSenderId: "16238141179",
  appId: "1:16238141179:web:b9d731e59d7bb945c11a5e"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };


  