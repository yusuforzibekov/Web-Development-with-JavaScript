function addNumber(arr, number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return arr; // No change if number is NaN or not a number
    }
    if (number > 0) {
        arr.unshift(number); // Add to the beginning if positive
    } else if (number < 0) {
        arr.push(number); // Add to the end if negative
    }
    return arr;
}

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // Arrays of different lengths are not equal
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; // Elements differ
        }
    }
    return true; // Arrays are equal
}

function getNumberOfEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // Arrays of different lengths are not equal
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!Object.is(arr1[i], arr2[i])) {
            return false; // Elements differ
        }
    }
    return true; // Arrays are equal
}

function getSubarray(arr, data) {
    const index = arr.indexOf(data);
    if (index === -1) {
        return []; // Return empty array if data is not found
    }
    return arr.slice(0, index + 1);
}

function getDuplicateValues(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

function getMaxNumbers(arr) {
    return arr.map(subArr => {
        if (subArr.length === 0) {
            return -Infinity; // Handle empty sub-arrays by returning -Infinity
        }
        return Math.max(...subArr);
    });
}
