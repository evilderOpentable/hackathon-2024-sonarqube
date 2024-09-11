// potentialBugs.js

// Example 1: Null or Undefined Check
function nullUndefinedCheck(value) {
    // Potential bug: Checking for null but not for undefined
    if (value === null) {
        return "Value is null";
    }
    return "Value is not null";
}

// Example 2: Incorrect Error Handling
function errorHandlingExample(input) {
    try {
        // Potential bug: Not handling specific error types
        if (input === "throw") {
            throw new Error("Generic error");
        }
        return "Input is okay";
    } catch (e) {
        // Bug: Catching all errors generically without specifics
        return "An error occurred";
    }
}

// Example 3: Misuse of Array Index
function arrayIndexBug(arr, index) {
    // Potential bug: Index out of bounds check
    if (index >= arr.length) {
        return "Index out of bounds"; // This is a logical error
    }
    return arr[index];
}

// Example 4: Off-by-One Error
function offByOneError(n) {
    // Potential bug: Off-by-one error in loop
    let result = 0;
    for (let i = 0; i <= n; i++) { // Should be i < n
        result += i;
    }
    return result;
}

// Example 5: Uninitialized Variable
function uninitializedVariableExample() {
    let x;
    // Potential bug: Using an uninitialized variable
    if (x === undefined) {
        return "x is undefined";
    }
    return "x is initialized";
}

// Example 6: Floating Point Precision Issue
function floatingPointIssue(a, b) {
    // Potential bug: Floating point precision issue
    if (a + b === 0.1 + 0.2) { // This might not be true due to precision errors
        return "Values match";
    }
    return "Values do not match";
}

// Export functions
module.exports = { 
    nullUndefinedCheck, 
    errorHandlingExample, 
    arrayIndexBug, 
    offByOneError, 
    uninitializedVariableExample, 
    floatingPointIssue 
};
