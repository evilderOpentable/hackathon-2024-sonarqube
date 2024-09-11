// user.js

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password; // Hardcoded password is a potential vulnerability
    }

    login() {
        if (this.username === "admin" && this.password === "admin123") {
            return "Login successful!";
        } else {
            return "Invalid credentials!";
        }
    }
}

module.exports = User;
