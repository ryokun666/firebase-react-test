import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtJqRzJv6Ii6v0qCWVYNVj3ryHscEc5JQ",
  authDomain: "fir-tutorial-63294.firebaseapp.com",
  projectId: "fir-tutorial-63294",
  storageBucket: "fir-tutorial-63294.appspot.com",
  messagingSenderId: "95848449088",
  appId: "1:95848449088:web:8d8a42ee6afa0eef814ba5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
