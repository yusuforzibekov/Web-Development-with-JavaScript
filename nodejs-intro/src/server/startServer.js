// Import the http module to create a server
const http = require('http');

// Import the fs module to read the countries.json file
const fs = require('fs');

// Define a function to start the server
function startServer() {
    // Create a server object using the http.createServer method
    const server = http.createServer((req, res) => {
        // Get the URL from the request object
        const url = req.url;

        // Set the response header to indicate the content type is JSON
        res.setHeader('Content-Type', 'application/json');

        // Read the countries.json file asynchronously
        fs.readFile(__dirname + '/countries.json', 'utf-8', (err, data) => {
            // Handle any errors while reading the file
            if (err) {
                // Set the status code to 500 (Internal Server Error)
                res.statusCode = 500;
                // Send the error message as the response
                res.end(JSON.stringify({
                    message: err.message
                }));
            } else {
                // Parse the data as a JSON object
                const countries = JSON.parse(data);

                // Check the URL and send the appropriate response
                if (url === '/') {
                    // If the URL is /, send the entire countries array as the response
                    res.end(JSON.stringify(countries));
                } else {
                    // Otherwise, extract the country name from the URL
                    const countryName = url.slice(1).toLowerCase();

                    // Find the country object that matches the country name
                    const country = countries.find(
                        (c) => c.country.toLowerCase() === countryName
                    );

                    // Check if the country exists
                    if (country) {
                        // If the country exists, send it as the response
                        res.end(JSON.stringify([country]));
                    } else {
                        // If the country does not exist, send a message as the response
                        res.end(JSON.stringify({
                            message: 'no such country in the list'
                        }));
                    }
                }
            }
        });
    });

    // Return the server object
    return server;
}

// Export the startServer function
module.exports = {
    startServer
};
