import { db } from './firebase-config.js';
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

function generateRecoveryCode() {
    return Math.floor(100000 + Math.random() * 900000); // 6 digit random number
}

function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        
        const dbRef = ref(db);


        // Check if the username already exists in Firebase
        get(child(dbRef, `users/${username}`)).then((snapshot) => {
            if (snapshot.exists()) {
                // Username already exists, prompt user to choose a different one
                alert("Username already exists. Please choose a different username.");
            } else {
                // Username doesn't exist, proceed with signup
                const recoveryCode = generateRecoveryCode();

                // Store user data in Firebase using Firebase 9.x syntax
                set(ref(db, 'users/' + username), {
                    username: username,
                    password: password,
                    recoveryCode: recoveryCode
                }).then(() => {
                    alert("Your unique code is: " + recoveryCode);
                    window.location.href = "login.html"; // Redirect after signup
                }).catch((error) => {
                    alert("Error: " + error.message);
                });
            } else {
                alert("Please fill out all fields.");
            }
        }

// Make the function available globally
window.signUp = signUp;

