import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDxrtGE6BoFgxhYF9yW6fd3lU9F0O7C1ss",
  authDomain: "react-2022-2a2ce.firebaseapp.com",
  projectId: "react-2022-2a2ce",
  storageBucket: "react-2022-2a2ce.appspot.com",
  messagingSenderId: "491830437779",
  appId: "1:491830437779:web:8b4d272045a9838fc0aa66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };