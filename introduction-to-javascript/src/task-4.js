"use strict";

function toSquare() {
    const number = parseInt(prompt("Enter an integer number:"), 10);
    
    return number * number;
}

const result = toSquare();

console.log(result);