function mocker(data) {
    // Return a new function that creates and returns a promise object
    return function () {
        // Create a new promise object
        return new Promise((resolve, reject) => {
            // Set a timeout of 1 second
            setTimeout(() => {
                // Resolve the promise with the data
                resolve(data);
            }, 1000);
        });
    };
}

// Export the function as a named export
module.exports = {
    mocker
};
