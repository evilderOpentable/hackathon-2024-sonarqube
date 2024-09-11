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

module.exports = { authenticateUser };
