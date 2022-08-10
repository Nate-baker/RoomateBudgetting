import { addUserToDB } from "./Database";
//Import firebase info
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";
import App from "../App";

//Setup firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5j6O2L0SZujZc61syiOR-AwtxZsXMx4U",
  authDomain: "login-page-8a7df.firebaseapp.com",
  projectId: "login-page-8a7df",
  storageBucket: "login-page-8a7df.appspot.com",
  messagingSenderId: "360602431126",
  appId: "1:360602431126:web:bfd9099b1f41d0d9d6dcb7",
  measurementId: "G-NXD53KFJHF",
  databaseURL: "https://login-page-8a7df-default-rtdb.firebaseio.com/"
};
//Initialize Firebase info
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//<--------------------------->
//<--------------------------->
//<--------------------------->
//<--------------------------->

//Try to create user with given email and password provided
export function createUser({ email, password }, setUser) {
  //Get firebase auth
  const auth = getAuth();

  //Use firebase createUser function with provided email/password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const uid = user.uid;

      //Add user to the database
      addUserToDB({ password: password, email: email, uid: uid });

      //Update App state to change "page"
      setUser({
        uid: uid,
        email: email,
        password: password
      });
    })
    .catch((error) => {
      // Failed Create User
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
    });
}

//Try to sign in using given email and password
export function signIn({ email, password }, setUser) {
  //Get firebase auth
  const auth = getAuth();

  //Use firebase signIn function with provided email/password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      //Update App state to change "page"
      setUser({
        uid: user.uid,
        email: email,
        password: password
      });
    })
    .catch((error) => {
      // Failed Sign In
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);

      //If we failed due to user not existing.... create the damn user
      if (errorCode === "auth/user-not-found") {
        createUser({ email: email, password: password }, setUser);
      }
    });
}
