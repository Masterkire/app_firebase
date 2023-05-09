// Importamos la funcion que necesita el SDK de firebase para iniciar
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Añade el SDKs que necesites utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// Objeto de Configuracion de tu aplicacion web con firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Iicializando firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;