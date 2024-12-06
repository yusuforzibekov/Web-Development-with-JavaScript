// This function calculates the total price after applying the discount, tax, shipping cost, and coupon code
export function calculateDiscountedPrice(params) {
    // Destructure the object parameter into individual variables
    let {
        basePrice,
        discountPercentage,
        taxPercentage,
        shippingCost,
        couponCode
    } = params;

    // Calculate the discount amount
    let discountAmount = (basePrice * discountPercentage) / 100;

    // Calculate the subtotal after discount
    let subTotal = basePrice - discountAmount;

    // Calculate the tax amount
    let taxAmount = (subTotal * taxPercentage) / 100;

    // Calculate the total before coupon
    let total = subTotal + taxAmount + shippingCost;

    // If there is a coupon code, apply it to the total
    if (couponCode) {
        total = getTotalWithCoupon({
            couponCode,
            total
        });
    }

    // Return the final total with two decimal places
    return total.toFixed(2);
}

// This function calculates the total price with a coupon code
function getTotalWithCoupon({
    couponCode,
    total
}) {
    // Validate the coupon code length
    if (couponCode.length !== 6) {
        throw new Error('Invalid coupon code');
    }

    // Calculate the coupon discount amount
    let couponDiscountAmount = (total * 0.1);

    // Subtract the coupon discount from the total
    total -= couponDiscountAmount;

    // Return the updated total
    return total;
}
