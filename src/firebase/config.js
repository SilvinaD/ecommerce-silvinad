// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkDAw7CmyHRWpaWHF64W4NbBlW1498c6g",
  authDomain: "reactproject-86fed.firebaseapp.com",
  projectId: "reactproject-86fed",
  storageBucket: "reactproject-86fed.appspot.com",
  messagingSenderId: "1086710442079",
  appId: "1:1086710442079:web:91f4b045f86ddc6d1753ea"
};

// Initialize Firebase -) conexion a firebase con mi api key
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
