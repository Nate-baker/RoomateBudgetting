import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child } from "firebase/database";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

function writeDBData(path, data) {
  set(ref(db, path), data);
}

function getDBData(path) {
  const dbRef = ref(getDatabase());
  let val;
  get(child(dbRef, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        val = snapshot.val();
      } else {
        val = null;
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return val;
}

export function addUserToDB(userData, UID) {
  const username = userData.username;
  const email = userData.email;
  const password = userData.password;

  writeDBData(`users/${username}`, {
    email: email,
    UID: UID,
    password: password
  });
}
