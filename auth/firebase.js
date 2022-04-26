// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkeLl6Bb4gvl5KvOBv-IeJ4p1Pz9Ae_m8",
  authDomain: "fir-auth-34d15.firebaseapp.com",
  projectId: "fir-auth-34d15",
  storageBucket: "fir-auth-34d15.appspot.com",
  messagingSenderId: "889617192224",
  appId: "1:889617192224:web:299eac18999cde09787345"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };