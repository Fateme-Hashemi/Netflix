
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy-9rPoKbbaFXoNoP0lB6jLvRFvTGzz_A",
  authDomain: "netflix-project-9e49e.firebaseapp.com",
  projectId: "netflix-project-9e49e",
  storageBucket: "netflix-project-9e49e.appspot.com",
  messagingSenderId: "698204911423",
  appId: "1:698204911423:web:5f5bf7604410f2bef9058a",
  measurementId: "G-JSZMQY4RDR"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth =getAuth(app);