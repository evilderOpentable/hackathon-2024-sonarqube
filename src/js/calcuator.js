// calculator.js

class Calculator {
    // Addition
    add(a, b) {
        return a + b;
    }

    // Subtraction
    subtract(a, b) {
        return a - b;
    }

    // Multiplication
    multiply(a, b) {
        return a * b;
    }

    // Division (Potential bug: division by zero)
    divide(a, b) {
        if (b === 0) {
            return "Division by zero is undefined";
        }
        return a / b;
    }
}

module.exports = Calculator;
