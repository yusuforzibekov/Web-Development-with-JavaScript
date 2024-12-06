// Import the startServer function from the startServer.js file
const {
    startServer
} = require('./startServer');

// Call the startServer function and get the server object
const server = startServer();

// Make the server listen on port 3000 without a callback function
const PORT = 3000;
server.listen(PORT);

// Log a message to the console when the server starts
console.log(`Server started and listening on port ${PORT}`);
