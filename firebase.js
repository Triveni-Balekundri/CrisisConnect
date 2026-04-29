import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3iCK-_0_44rSVEJJlngRdaYm5lfWNNNg",
  authDomain: "community-crisis-support.firebaseapp.com",
  projectId: "community-crisis-support",
  storageBucket: "community-crisis-support.firebasestorage.app",
  messagingSenderId: "636007634440",
  appId: "1:636007634440:web:60dc8e7fc270af06e1a3bd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);