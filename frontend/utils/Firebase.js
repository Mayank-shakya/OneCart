import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginecommerce-8f1fb.firebaseapp.com",
  projectId: "loginecommerce-8f1fb",
  storageBucket: "loginecommerce-8f1fb.firebasestorage.app",
  messagingSenderId: "117433402583",
  appId: "1:117433402583:web:1774ed04f92255519e9c92"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}


// kid  rzp_test_19Z91rmcxWw4Hv
// ksc KwLh5SweXVU2JRDRtLxncq7Q
