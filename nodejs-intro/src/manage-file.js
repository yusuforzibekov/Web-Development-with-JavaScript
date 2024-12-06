// Import the fs module to work with files
const fs = require('fs');

// Get the command line arguments
const args = process.argv.slice(2);

// Check if the command name is valid
const command = args[0];
if (command !== '--copy' && command !== '--rename') {
    throw new Error('Invalid command name! Please specify either copy or rename!');
}

// Get the source file name
const source = args[1];
if (!source || source.startsWith('--')) {
    throw new Error('Invalid arguments! The value should not start with --!');
}

// Get the destination file name or use the default value
const destination = args[3] || 'default.txt';
if (destination.startsWith('--')) {
    throw new Error('Invalid arguments! The value should not start with --!');
}

// Define a callback function to handle errors
const callback = (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`The file ${source} was successfully ${command.slice(2)}d to ${destination}`);
    }
};

// Perform the copy or rename operation
if (command === '--copy') {
    // Copy the file asynchronously
    fs.copyFile(source, destination, callback);
} else if (command === '--rename') {
    // Rename the file asynchronously
    fs.rename(source, destination, callback);
}
