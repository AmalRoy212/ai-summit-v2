import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwF2kgcmXjOaz6WWEwYcVp3jtbCxMJY7I",
  authDomain: "ai-summit-dubai.firebaseapp.com",
  projectId: "ai-summit-dubai",
  storageBucket: "ai-summit-dubai.appspot.com",
  messagingSenderId: "399585577876",
  appId: "1:399585577876:web:03cdf7043b2ecea79a1d81",
  measurementId: "G-L0MJJ5X7TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
