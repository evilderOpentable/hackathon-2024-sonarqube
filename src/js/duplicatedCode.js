// duplicatedCode.js

function calculateDiscount(price, discountPercentage) {
    if (discountPercentage > 100 || discountPercentage < 0) {
        throw new Error('Invalid discount percentage');
    }
    return price - (price * (discountPercentage / 100));
}

module.exports = { calculateDiscount };
