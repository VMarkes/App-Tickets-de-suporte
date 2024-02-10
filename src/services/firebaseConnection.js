
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDq2PP7Zj1w04wJJZ2HpCqPn3tQL_kL2G8",
  authDomain: "tickets-1f1a7.firebaseapp.com",
  projectId: "tickets-1f1a7",
  storageBucket: "tickets-1f1a7.appspot.com",
  messagingSenderId: "767057888490",
  appId: "1:767057888490:web:26a72d79af7a34d0300393"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };