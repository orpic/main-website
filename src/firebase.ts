// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9VbG5fieIS-QM1GpXd4D9LMBnxxvaV6Q",
  authDomain: "koviato-admin.firebaseapp.com",
  projectId: "koviato-admin",
  storageBucket: "koviato-admin.appspot.com",
  messagingSenderId: "152982670279",
  appId: "1:152982670279:web:c2ca358b1611757d7c27e2",
  measurementId: "G-5SW7S8QCPX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
