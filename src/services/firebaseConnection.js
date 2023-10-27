import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBGRgImv5jx8trUcbuNr5KqgXo1mT9lz_s",
  authDomain: "blog-e9068.firebaseapp.com",
  projectId: "blog-e9068",
  storageBucket: "blog-e9068.appspot.com",
  messagingSenderId: "467946702238",
  appId: "1:467946702238:web:294e62e9b723d9cf1a028f",
  measurementId: "G-8JWGE7G8X4"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };