import { db } from './firebase-config.js';
import { ref, get, child } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const normalizedUsername = username.toLowerCase();

    if (normalizedUsername && password) {
        const dbRef = ref(db);

        get(child(dbRef, `users/${normalizedUsername}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                if (userData.password === password) {
                    // Store username in sessionStorage for this session
                    sessionStorage.setItem('username', normalizedUsername);
                    window.location.href = "/homepagev2/html.html";
                } else {
                    alert("Incorrect password. Please try again.");
                }
            } else {
                alert("Username does not exist.");
            }
        }).catch((error) => {
            alert("Error: " + error.message);
        });
    } else {
        alert("Please enter both username and password.");
    }
}

window.login = login;
