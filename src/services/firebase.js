import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3zuWmUJWEFHD9A6te0PpjiyUab50dGQg",
  authDomain: "todolist-20da9.firebaseapp.com",
  databaseURL: "https://todolist-20da9-default-rtdb.firebaseio.com",
  projectId: "todolist-20da9",
  storageBucket: "todolist-20da9.appspot.com",
  messagingSenderId: "448567898114",
  appId: "1:448567898114:web:0d9abb6a007c2ab723f71b",
  measurementId: "G-242SYFPE4K"
};

//initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;



















//  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
//   import { getAuth } from "firebase/auth";
// //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyD3zuWmUJWEFHD9A6te0PpjiyUab50dGQg",
//     authDomain: "todolist-20da9.firebaseapp.com",
//     databaseURL: "https://todolist-20da9-default-rtdb.firebaseio.com",
//     projectId: "todolist-20da9",
//     storageBucket: "todolist-20da9.firebasestorage.app",
//     messagingSenderId: "448567898114",
//     appId: "1:448567898114:web:0d9abb6a007c2ab723f71b",
//     measurementId: "G-242SYFPE4K"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   //   const analytics = getAnalytics(app);
//   export const auth = getAuth(app);

// استيراد وظائف Firebase

