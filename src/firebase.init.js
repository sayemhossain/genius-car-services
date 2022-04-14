import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsRY3miEm6EkTVDQV5SrTjITvHwAmEg3Y",
  authDomain: "genius-car-services-7faeb.firebaseapp.com",
  projectId: "genius-car-services-7faeb",
  storageBucket: "genius-car-services-7faeb.appspot.com",
  messagingSenderId: "1070990543424",
  appId: "1:1070990543424:web:dcf611e1a583ede9de6da5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default auth = getAuth(app);
