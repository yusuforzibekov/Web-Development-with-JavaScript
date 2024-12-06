// This function filters an array of strings and returns only the items that contain a given string as a substring
export function filterArrayContainsString(array, str) {
    // Return a copy of the original array if str is null or undefined
    if (typeof str !== 'string' || str === null || str === undefined) {
        return array.slice();
    }

    // Filter the array using a callback function that checks if each item includes the string
    const filteredArray = array.filter((item) => {
        // Return true if the item includes the string, false otherwise
        return item.includes(str);
    });

    // Return the filtered array
    return filteredArray;
}
