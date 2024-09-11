// Function 1: authenticateUser
function authenticateUser(username, password) {
    if (username === "") return "Username is required";
    if (password === "") return "Password is required";
    if (username === "admin" && password === "password123") return "Login successful";
    return "Invalid username or password";
}

// Function 2: checkCredentials (Exact Duplicate)
function checkCredentials(username, password) {
    if (username === "") return "Username is required";
    if (password === "") return "Password is required";
    if (username === "admin" && password === "password123") return "Login successful";
    return "Invalid username or password";
}

// Function 3: verifyPassword (Exact Duplicate)
function verifyPassword(password) {
    if (password === "") return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters long";
    if (password === "password123") return "Valid password";
    return "Invalid password";
}

// Function 4: checkPassword (Exact Duplicate)
function checkPassword(password) {
    if (password === "") return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters long";
    if (password === "password123") return "Valid password";
    return "Invalid password";
}

module.exports = { authenticateUser, checkCredentials, verifyPassword, checkPassword };
