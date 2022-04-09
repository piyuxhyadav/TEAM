import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvyuKliqJuVBZ50GfzJpFHwziPmuMGwiQ",
  authDomain: "fir-c4e9c.firebaseapp.com",
  projectId: "fir-c4e9c",
  storageBucket: "fir-c4e9c.appspot.com",
  messagingSenderId: "323555746560",
  appId: "1:323555746560:web:f36cfcb46e3411b73449e5",
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
