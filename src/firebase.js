import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDXK9FUeIgS_zW_CGywNU7MPB2wAlUVdPE",
    authDomain: "notes-pd.firebaseapp.com",
    databaseURL: "https://notes-pd-default-rtdb.firebaseio.com",
    projectId: "notes-pd",
    storageBucket: "notes-pd.appspot.com",
    messagingSenderId: "478282573173",
    appId: "1:478282573173:web:ed54d594dab63db02adf3c",
    measurementId: "G-HMRP977EH4"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { db };
