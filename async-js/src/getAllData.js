function getAllData(database) {
    // Return a promise that resolves with the database parameter
    return new Promise((resolve, reject) => {
        // Set a timeout of 1 second
        setTimeout(() => {
            // Resolve the promise with the database parameter
            resolve(database);
        }, 1000);
    });
}

// Export the function as a named export
module.exports = {
    getAllData
};
