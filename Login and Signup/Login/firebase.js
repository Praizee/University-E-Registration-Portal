// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnqiFyvwuh2S5m_dT5VtALZJY8BwG-mrg",
    authDomain: "login-d4f6c.firebaseapp.com",
    databaseURL: "https://login-d4f6c-default-rtdb.firebaseio.com",
    projectId: "login-d4f6c",
    storageBucket: "login-d4f6c.appspot.com",
    messagingSenderId: "776758456731",
    appId: "1:776758456731:web:d9eb145c37bb17d892713e",
    measurementId: "G-M2NGW7C9YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
// import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAnqiFyvwuh2S5m_dT5VtALZJY8BwG-mrg",
//     authDomain: "login-d4f6c.firebaseapp.com",
//     databaseURL: "https://login-d4f6c-default-rtdb.firebaseio.com",
//     projectId: "login-d4f6c",
//     storageBucket: "login-d4f6c.appspot.com",
//     messagingSenderId: "776758456731",
//     appId: "1:776758456731:web:d9eb145c37bb17d892713e",
//     measurementId: "G-M2NGW7C9YK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();
// const database = getDatabase(app);

// submitData.addEventListener('click', (e) => {

//     var email = document.getElementById('email').value;
//     var password = document.getElementById('psw').value;

//     //sign up user
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // ... user.uid
//             set(ref(database, 'users/' + user.uid), {
//                 email: email,
//                 password: password
//             })
//                 .then(() => {
//                     // Data saved successfully!
//                     alert('user created successfully');

//                 })
//                 .catch((error) => {
//                     // The write failed...
//                     alert(error);
//                 });
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//             alert(errorMessage);
//         });

//     // log in user
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // ...

//             // save log in details into real time database
//             var lgDate = new Date();
//             update(ref(database, 'users/' + user.uid), {
//                 last_login: lgDate,
//             })
//                 .then(() => {
//                     // Data saved successfully!
//                     alert('user logged in successfully');

//                 })
//                 .catch((error) => {
//                     // The write failed...
//                     alert(error);
//                 });
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);
//         });

//     // sign out user
//     signOut(auth).then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });
// });
