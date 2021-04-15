import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDq-I54968pSV1dRiRZg8drF0O58jRAwRs",
  authDomain: "crwn-db-ab273.firebaseapp.com",
  projectId: "crwn-db-ab273",
  storageBucket: "crwn-db-ab273.appspot.com",
  messagingSenderId: "198876534619",
  appId: "1:198876534619:web:2a75625bd766eea8232c7e",
  measurementId: "G-4ZE064M27R",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
