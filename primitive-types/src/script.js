function isValid(yusufbek_orzibekov) {
    return !yusufbek_orzibekov.includes(' ');
}

function countChars(str) {
    const trimmedStr = str.trim();

    return trimmedStr.length;
}

function sum(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    return numA + numB;
}

function formatMoney(amount) {
    const formattedAmount = amount.toFixed(2);

    return `$${formattedAmount}`;
}

function convertToBoolean(value) {
    return Boolean(value);
}
