function summarize(...args) {
    // Return a promise that resolves to the sum of values from all promises
    return Promise.all(args).then((resolvedValues) => {
        // Use reduce to sum up all the resolved values
        const sum = resolvedValues.reduce((acc, value) => acc + value, 0);
        // Return the sum
        return sum;
    });
}

// Export the function as a named export
module.exports = {
    summarize
};
