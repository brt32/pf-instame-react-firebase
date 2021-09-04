import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUOYaMecU8xghYsjcREcnWcA10dTGinMs",
  authDomain: "pf-instame-react-firebase.firebaseapp.com",
  projectId: "pf-instame-react-firebase",
  storageBucket: "pf-instame-react-firebase.appspot.com",
  messagingSenderId: "997994081100",
  appId: "1:997994081100:web:d170c48c64a82bf36d7de9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
