// This function checks if a string is a valid email address using regular expression
export function isValidEmail(str) {
    // If the string is null or undefined, return false
    if (typeof str !== 'string' || str === null || str === undefined) {
        return false;
    }

    // Regular expression pattern for validating email addresses
    const emailPattern = /^[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+(\.[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;

    // Test the string against the regular expression and return the result
    return emailPattern.test(str);
}
