// config.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB2mwnYUD2OuqLquJE-vO6F3sZQ85iIr5o",
  authDomain: "safevoice-2d31b.firebaseapp.com",
  projectId: "safevoice-2d31b",
  storageBucket: "safevoice-2d31b.appspot.com",
  messagingSenderId: "525884520653",
  appId: "1:525884520653:web:ad7524f529057e15ef5184",
  measurementId: "G-XVL63MSR6Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
