// This function checks if a string contains digits using regular expression
export function hasDigit(str) {
    // If the string is null or undefined, return false
    if (typeof str !== 'string' || str === null || str === undefined) {
        return false;
    }

    // Create a regular expression object that matches any digit
    const regex = /\d/;

    // Test the string against the regular expression and return the result
    return regex.test(str);
}
