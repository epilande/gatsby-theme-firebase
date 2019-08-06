import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";

const isBrowser = typeof window !== "undefined";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

let auth: firebase.auth.Auth;
let firestore: firebase.firestore.Firestore;

if (isBrowser) {
  auth = firebase.auth();
  firestore = firebase.firestore();
}

export { auth, firestore };
export default firebase;
