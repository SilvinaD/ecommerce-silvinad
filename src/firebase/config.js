import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkDAw7CmyHRWpaWHF64W4NbBlW1498c6g",
  authDomain: "reactproject-86fed.firebaseapp.com",
  projectId: "reactproject-86fed",
  storageBucket: "reactproject-86fed.appspot.com",
  messagingSenderId: "1086710442079",
  appId: "1:1086710442079:web:91f4b045f86ddc6d1753ea"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
