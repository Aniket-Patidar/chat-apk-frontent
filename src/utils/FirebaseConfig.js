import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC0tukeGbu1WoERZDmYq7K0pR012qawKss",
    authDomain: "mern-whatsup.firebaseapp.com",
    projectId: "mern-whatsup",
    storageBucket: "mern-whatsup.appspot.com",
    messagingSenderId: "563556382998",
    appId: "1:563556382998:web:0379089f1bc9e45e23f837",
    measurementId: "G-V1JPTC5EQN"
};

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)