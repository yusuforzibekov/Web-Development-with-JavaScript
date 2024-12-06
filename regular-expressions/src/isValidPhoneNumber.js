// This function checks if a string is a valid phone number in the format 555-555-5555 using regular expression
export function isValidPhoneNumber(str) {
    // If the string is null or undefined, return false
    if (typeof str !== 'string' || str === null || str === undefined) {
        return false;
    }

    // Create a regular expression object that matches the phone number format
    const regex = /^\d{3}-\d{3}-\d{4}$/;

    // Test the string against the regular expression and return the result
    return regex.test(str);
}
