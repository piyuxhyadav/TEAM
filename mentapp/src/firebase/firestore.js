import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvyuKliqJuVBZ50GfzJpFHwziPmuMGwiQ",
  authDomain: "fir-c4e9c.firebaseapp.com",
  projectId: "fir-c4e9c",
  storageBucket: "fir-c4e9c.appspot.com",
  messagingSenderId: "323555746560",
  appId: "1:323555746560:web:f36cfcb46e3411b73449e5",
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

export const showData = async () => {
  // collection ref
  const colRef = collection(db, "users");

  // get collection data
  await getDocs(colRef)
    .then((snapshot) => {
      // console.log(snapshot.docs)
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      console.log(users);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// adding docs
export const addUserDetails = async (currentUserData) => {
  const colRef = collection(db, "users");

  await addDoc(colRef, currentUserData);
};

export const addQuizData = async (quizName, data) => {
  const colRef = collection(db, quizName);

  await addDoc(colRef, data);
};
export const addJohariQuizData = async (data) => {
  const colRef = collection(db, "johariQuiz");

  await addDoc(colRef, data);
};
export const addStressQuizData = async (data) => {
  const colRef = collection(db, "stressQuiz");

  await addDoc(colRef, data);
};

export const userQuery = async (email) => {
  const colRef = collection(db, "users");
  const q = query(colRef, where("email", "==", email));

  const snapshot = await getDocs(q);
  let users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  // console.log(users[0]);
  return users[0];
};
