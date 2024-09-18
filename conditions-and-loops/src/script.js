function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return `The number ${num} is even`;
    } else {
        return `The number ${num} is odd`;
    }
}

function rangeSum(a, b) {
    if (a > b) {
        return 0;
    }

    if (a === b) {
        return a;
    }

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    
    return sum;
}

function sumExclude(num, n) {
    // Handle the case where every number should be excluded
    if (n === 1) {
        return 0;
    }

    // Handle the case where n is greater than num
    if (n > num) {
        let totalSum = 0;
        for (let i = 1; i <= num; i++) {
            totalSum += i;
        }
        return totalSum;
    }

    // Compute the sum excluding every n-th number
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % n !== 0) {
            sum += i;
        }
    }
    
    return sum;
}

function calcSimple(num1, num2, operator) {
    let result;

    if (operator === '+') {
        result = num1 + num2;
        return `${num1}+${num2}=${result}`;
    } else if (operator === '-') {
        result = num1 - num2;
        return `${num1}-${num2}=${result}`;
    } else if (operator === '*') {
        result = num1 * num2;
        return `${num1}*${num2}=${result}`;
    } else if (operator === '/') {
        if (num2 === 0) {
            return 'Division by zero is not allowed';
        }
        result = num1 / num2;
        return `${num1}/${num2}=${result}`;
    } else {
        return 'invalid operator';
    }
}

function makeRulerStr(length) {
    // Return "0" if length is 0
    if (length === 0) {
        return "0";
    }

    // Initialize the ruler string with the first number
    let rulerStr = "0";
    
    // Define the segment of hash marks
    const hashMarks = "'''''''''";
    
    // Append each number with hash marks
    for (let i = 1; i <= length; i++) {
        rulerStr += hashMarks + i;
    }

    return rulerStr;
}
