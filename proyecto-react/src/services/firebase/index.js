import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZ7Uu9BkLhRB_YVbUu7QbIPdZKTaDruYA",
    authDomain: "backendreactcoder-9ff41.firebaseapp.com",
    projectId: "backendreactcoder-9ff41",
    storageBucket: "backendreactcoder-9ff41.appspot.com",
    messagingSenderId: "553936686063",
    appId: "1:553936686063:web:de5a7d90a815b1aeb2841a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)