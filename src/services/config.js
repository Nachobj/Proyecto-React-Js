import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tienda-gamer-a885d.firebaseapp.com",
  projectId: "tienda-gamer-a885d",
  storageBucket: "tienda-gamer-a885d.appspot.com",
  messagingSenderId: "447862899743",
  appId: "1:447862899743:web:9ce8bdb544da26b69c812a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);