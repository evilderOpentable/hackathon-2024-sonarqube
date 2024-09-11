// duplicatedCode.js

function calculateDiscount(price, discountPercentage) {
    if (discountPercentage > 100 || discountPercentage < 0) {
        throw new Error('Invalid discount percentage');
    }
    return price - (price * (discountPercentage / 100));
}

// This function has almost the same logic as calculateDiscount()
function calculateTax(price, taxPercentage) {
    if (taxPercentage > 100 || taxPercentage < 0) {
        throw new Error('Invalid tax percentage');
    }
    return price + (price * (taxPercentage / 100)); // Duplicated logic here
}

module.exports = { calculateDiscount, calculateTax };
