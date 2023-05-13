// Importamos la funcion que necesita el SDK de firebase para iniciar
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import.meta.env;

// TODO: Añade el SDKs que necesites utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// Objeto de Configuracion de tu aplicacion web con firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlH31Ng-LE_W1ccunoSU6yHi4J8iDzGzg",
  authDomain: "react-firebase-app-cd828.firebaseapp.com",
  projectId: "react-firebase-app-cd828",
  storageBucket: "react-firebase-app-cd828.appspot.com",
  messagingSenderId: "854941691975",
  appId: "1:854941691975:web:b646a13163407aad490162"
};

//Congiguracion para tomar las claves desde la variable de entorno que debes crear, solo descomenta el import
/* const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
}; */

// Iicializando firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;