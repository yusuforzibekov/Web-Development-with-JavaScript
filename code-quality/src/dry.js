// Replace the percentFormatter and currencyFormatter functions with one function called formatter
export function formatter(num, symbol) {
    // Check if the num argument is a number
    if (typeof num !== 'number') {
        // If not, return null
        return null;
    }

    // Return the formatted string with the num and symbol arguments
    return `${num}${symbol}`;
}

export function generateGreetUserMessage(user) {
    // Check if the user argument is truthy
    if (user) {
        // Check if the user is logged in and over 18
        if (user.isLoggedIn && user.age > 18) {
            // Return a greeting and a thank you message
            return `Hello, ${user.name}! Thank you, for your purchase!`;
        }

        // Return a thank you message for a stranger
        return 'Thank you, stranger!';
    }

    // Return null if the user argument is falsy
    return null;
}
