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
// demo.js

// Function 1: Display duplicated lines
function duplicatedLinesExample1(value) {
    // Check if the value is empty
    if (value === "") {
        return "Value is required";
    }
    // Check if the value length is valid
    if (value.length < 5) {
        return "Value must be at least 5 characters long";
    }
    // Return success message
    return "Value is valid";
}

// Function 2: Display duplicated lines
function duplicatedLinesExample2(value) {
    // Check if the value is empty
    if (value === "") {
        return "Value is required";
    }
    // Check if the value length is valid
    if (value.length < 5) {
        return "Value must be at least 5 characters long";
    }
    // Return success message
    return "Value is valid";
}

// Function 3: Display duplicated blocks
function duplicatedBlocksExample1(value) {
    // Check if the value is empty
    if (value === "") {
        return "Value is required";
    }
    // Check if the value length is valid
    if (value.length < 5) {
        return "Value must be at least 5 characters long";
    }
    // Return success message
    return "Value is valid";
}

// Function 4: Display duplicated blocks
function duplicatedBlocksExample2(value) {
    // Check if the value is empty
    if (value === "") {
        return "Value is required";
    }
    // Check if the value length is valid
    if (value.length < 5) {
        return "Value must be at least 5 characters long";
    }
    // Return success message
    return "Value is valid";
}

// Function 5: Display additional duplicated block (with slight variation)
function duplicatedBlocksExample3(value) {
    // Check if the value is empty
    if (value === "") {
        return "Value is required";
    }
    // Check if the value length is valid
    if (value.length < 5) {
        return "Value must be at least 5 characters long";
    }
    // Return success message
    return "Value is good"; // Slightly different message
}

module.exports = {
    duplicatedLinesExample1, 
    duplicatedLinesExample2, 
    duplicatedBlocksExample1, 
    duplicatedBlocksExample2, 
    duplicatedBlocksExample3,
    authenticateUser,
    checkCredentials,
    verifyPassword,
    checkPassword,
};
// Function 6: Display additional duplicated block (with slight variation)