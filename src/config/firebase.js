
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDzfvMBYfX9P2DbTEFqbPV4yLG3UCUI7wM",
    authDomain: "tiktok---jornada-203d3.firebaseapp.com",
    projectId: "tiktok---jornada-203d3",
    storageBucket: "tiktok---jornada-203d3.appspot.com",
    messagingSenderId: "3133781040",
    appId: "1:3133781040:web:b95482aaaa07961a34a9f5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;