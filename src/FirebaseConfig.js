
import { initializeApp } from "firebase/app";

import {
  getFirestore
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCvMw2uULj_9Di4xR1AqZSxp61sO-VnhKY",
  authDomain: "todo-app-cb2da.firebaseapp.com",
  projectId: "todo-app-cb2da",
  storageBucket: "todo-app-cb2da.appspot.com",
  messagingSenderId: "137892311312",
  appId: "1:137892311312:web:ecae9a0fcd1a87cd7e7595",
  measurementId: "G-NYCQ1W999R"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
