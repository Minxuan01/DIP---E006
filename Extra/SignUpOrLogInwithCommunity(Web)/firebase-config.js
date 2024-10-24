// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyA8TxfmLqCgjQVylml_4CyhIBlaZ8sVSnM",
  authDomain: "sign-up-or-log-in-c0e0c.firebaseapp.com",
  databaseURL: "https://sign-up-or-log-in-c0e0c-default-rtdb.firebaseio.com",
  projectId: "sign-up-or-log-in-c0e0c",
  storageBucket: "sign-up-or-log-in-c0e0c.appspot.com",
  messagingSenderId: "283540510655",
  appId: "1:283540510655:web:e9efd3bf0f084e4bf7b30a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
