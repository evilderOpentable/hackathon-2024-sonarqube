// Example 1: Long Function
function longFunctionExample() {
    // Simulate a long function with multiple responsibilities
    let result = "";
    for (let i = 0; i < 1000; i++) {
        result += i;
    }
    const condition = result.length > 500 ? true : false;
    if (condition) {
        console.log("Condition met");
    } else {
        console.log("Condition not met");
    }
    return result;
}

// Example 2: Complex Conditional
function complexConditionalExample(value) {
    if (value === null || value === undefined) {
        return "Value is null or undefined";
    } else if (typeof value !== 'string') {
        return "Value is not a string";
    } else if (value.length < 5 || value.length > 100) {
        return "Value length is out of range";
    } else {
        return "Value is valid";
    }
}

// Example 3: Magic Numbers
function magicNumbersExample(num) {
    // Using magic numbers directly in the code
    if (num === 42) {
        return "Answer to life";
    } else if (num === 3.14) {
        return "Pi";
    } else if (num === 0) {
        return "Zero";
    } else {
        return "Unknown number";
    }
}

// Example 4: Repeated Code
function repeatedCodeExample(value) {
    // Repeating similar logic with slight variations
    if (value === null) {
        return "Value is null";
    }
    if (value === undefined) {
        return "Value is undefined";
    }
    if (value === "") {
        return "Value is an empty string";
    }
    return "Value is valid";
}

function anotherRepeatedCodeExample(value) {
    // Repeating similar logic with slight variations
    if (value === null) {
        return "Value is null";
    }
    if (value === undefined) {
        return "Value is undefined";
    }
    if (value === "") {
        return "Value is an empty string";
    }
    return "Value is valid";
}

// Example 5: Unused Variable
function unusedVariableExample() {
    let unusedVariable = 10; // This variable is declared but not used
    return "Check the code smell";
}

// Export functions
module.exports = { 
    longFunctionExample, 
    complexConditionalExample, 
    magicNumbersExample, 
    repeatedCodeExample, 
    anotherRepeatedCodeExample, 
    unusedVariableExample 
};
