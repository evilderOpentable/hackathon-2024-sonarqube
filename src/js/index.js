// index.js

const Calculator = require('./calculator');
const User = require('./user');
const utils = require('./utils');

// Calculator demo
const calculator = new Calculator();
console.log("Addition: ", calculator.add(10, 5));
console.log("Division: ", calculator.divide(10, 0)); // Potential bug: division by zero

// User demo
const user = new User("admin", "admin123"); // Hardcoded password issue
console.log(user.login());

// Utils demo
utils.inefficientLoop(); // Inefficient loop issue
console.log("Is 2 even? ", utils.isEven(2));
console.log("Is 3 odd? ", utils.isOdd(3));
