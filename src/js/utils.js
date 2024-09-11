// utils.js

// Inefficient loop example
function inefficientLoop() {
    for (let i = 0; i < 1000000; i++) {
        console.log(i); // Inefficient: Logging in a loop is costly
    }
}

// Duplicate code example
function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0; // Duplicate code smell
}

module.exports = {
    inefficientLoop,
    isEven,
    isOdd
};
