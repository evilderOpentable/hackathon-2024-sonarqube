// auth.js

// Function 1: authenticateUser
function authenticateUser(username, password) {
    if (username === "") return "Username is required";
    if (password === "") return "Password is required";
    if (username === "admin" && password === "password123") return "Login successful";
    return "Invalid username or password";
}

module.exports = { authenticateUser, checkCredentials, verifyPassword, checkPassword };
