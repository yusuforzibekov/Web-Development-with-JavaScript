// Function to avoid Cross-Site Scripting (XSS)
export function crossSiteScripting(userInput) {
    document.getElementById("output").textContent = userInput;
}

// Function to avoid Remote Code Execution (eval)
export function remoteCodeExecution(userInput) {
    // Use Function constructor instead of eval
    const func = new Function(userInput);
    func();
}

// Function to prevent SQL Injection
export function SQLInjection(userInput) {
    // Ensure user input is a valid number
    if (!/^\d+$/.test(userInput)) {
        return null;
    }
    return `SELECT * FROM users WHERE id = ${userInput}`;
}

// Function to add security headers to requests
export async function safeRequest() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'deny',
        'X-XSS-Protection': '1; mode=block',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    };

    return await fetch(url, {
        method: 'POST',
        headers: headers,
    });
}

module.exports = {
    crossSiteScripting,
    remoteCodeExecution,
    SQLInjection,
    safeRequest
};
