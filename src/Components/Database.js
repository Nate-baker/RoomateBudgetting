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
  return new Promise((resolve, reject) => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, path))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          resolve(snapshot.val());
        } else {
          reject("Something went wrong");
        }
      })
      .catch((error) => {
        reject(error);
        console.error(error);
      });
  });
}

function addUserToDB({ password, email, uid }) {
  writeDBData(`users/${uid}`, {
    uid: uid,
    email: email,
    password: password
  });
}

function getUser(uid) {
  return getDBData(`users/${uid}`);
}

function addBill(uid, bill) {
  writeDBData(`users/${uid}/Bills/${bill.name}`, bill);
}

function getBills(uid) {
  return getDBData(`users/${uid}/Bills`);
}

module.exports.addUserToDB = addUserToDB;
module.exports.getUser = getUser;
module.exports.addBill = addBill;
module.exports.getBills = getBills;
