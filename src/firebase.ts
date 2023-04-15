import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxsXb7GZEdQUGcb2lpyf_VubQGcrZckhc",
  authDomain: "discord-clone-9b3df.firebaseapp.com",
  projectId: "discord-clone-9b3df",
  storageBucket: "discord-clone-9b3df.appspot.com",
  messagingSenderId: "247367103830",
  appId: "1:247367103830:web:f0fbab19be43b55540d2f7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };