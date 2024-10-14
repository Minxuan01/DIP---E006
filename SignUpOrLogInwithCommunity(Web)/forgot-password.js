import { db } from './firebase-config.js';
import { ref, get, child, update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

function resetPassword() {
    const resetCode = document.getElementById('reset-code').value;
    const newPassword = document.getElementById('new-password').value;

    if (resetCode && newPassword) {
        const dbRef = ref(db);

        // Retrieve all users from the database
        get(child(dbRef, 'users')).then((snapshot) => {
            if (snapshot.exists()) {
                let userFound = false;
                
                snapshot.forEach((userSnapshot) => {
                    const userData = userSnapshot.val();
                    console.log("Checking user: ", userSnapshot.key);
                    console.log("Stored recovery code for this user: ", userData["recoveryCode"]);
                    console.log("Entered reset code: ", resetCode);

                    // Convert both codes to strings and check if the recoveryCode matches the entered code
                    if (String(userData["recoveryCode"]) === String(resetCode)) {
                        console.log("Matching recovery code found for user:", userSnapshot.key);

                        const username = userSnapshot.key;  // Get the username key

                        // Update the user's password
                        const updates = {};
                        updates[`users/${username}/password`] = newPassword;

                        update(dbRef, updates)
                            .then(() => {
                                alert("Password has been reset successfully!");
                                window.location.href = "login.html"; // Redirect to login page
                            })
                            .catch((error) => {
                                alert("Error updating password: " + error.message);
                            });
                        
                        userFound = true;  // Mark that the user was found
                        return true;  // Exit the loop once user is found
                    }
                });

                // If no user was found with the matching recovery code
                if (!userFound) {
                    console.log("Invalid recovery code entered:", resetCode);
                    alert("Invalid recovery code. Please try again.");
                }
            } else {
                alert("No users found in the database.");
            }
        }).catch((error) => {
            console.error("Error fetching users: ", error);
            alert("Error: " + error.message);
        });
    } else {
        alert("Please fill in all fields.");
    }
}

// Make the function globally available
window.resetPassword = resetPassword;
