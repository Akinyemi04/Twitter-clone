import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCxJRkTpcTZFvAWEoFnaANPL1sjsawZIg",
  authDomain: "twitter-clone-67536.firebaseapp.com",
  projectId: "twitter-clone-67536",
  storageBucket: "twitter-clone-67536.appspot.com",
  messagingSenderId: "367169980181",
  appId: "1:367169980181:web:9975eda3517ee7bb888b1c",
  measurementId: "G-025798HNN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const store = getFirestore(app)
export const storage = getStorage(app)
export default app