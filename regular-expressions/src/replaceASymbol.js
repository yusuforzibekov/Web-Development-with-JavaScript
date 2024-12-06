// This function finds and replaces words that begin and end with the letter a with a ! sign
export function replaceASymbol(str) {
    // If the string is null or undefined, return the original string
    if (str === null || str === undefined) {
        return str;
    }

    // Create a regular expression object that matches words that begin and end with the letter a
    const regex = /\ba[a-z]*a\b/gi;

    // Replace the matched words with a ! sign and return the new string
    return str.replace(regex, '!');
}
