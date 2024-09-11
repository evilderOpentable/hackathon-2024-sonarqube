// auth.js

function authenticateUser(username, password) {
    // Check if username exists
    if (username === "") {
        return "Username is required";
    }

    // Check if password exists
    if (password === "") {
        return "Password is required";
    }

    // Simulate checking user credentials
    if (username === "admin" && password === "password123") {
        return "Login successful";
    } else {
        return "Invalid username or password";
    }
}

function validatePassword(password) {
    // Check if password exists
    if (password === "") {
        return "Password is required";
    }

    // Check if password length is sufficient
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    // Simulate password validation
    if (password === "password123") {
        return "Valid password";
    } else {
        return "Invalid password";
    }
}

module.exports = { authenticateUser, validatePassword };
