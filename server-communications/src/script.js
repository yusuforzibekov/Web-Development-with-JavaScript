async function getRandomUsers(quantity, nationalities) {
    // Set the default values for the parameters if they are not provided
    quantity = quantity || 1;
    nationalities = nationalities || "";

    // Construct the URL with the query parameters
    const url = `https://randomuser.me/api/?results=${quantity}&nat=${nationalities}&inc=name,email,nat&noinfo`;

    // Make a fetch request to the URL and await the response
    const response = await fetch(url);

    // Convert the response to a JSON object and await the result
    const data = await response.json();

    // Extract the array of users from the results property of the data object
    const users = data.results;

    // Return the array of users
    return users;
}

async function getUsers(names) {
    // create an empty array to store the results
    let results = [];
    // loop through the input array of names
    for (let name of names) {
        // try to fetch the user data from the GitHub API
        try {
            let response = await fetch(`https://api.github.com/users/${name}`);
            let user = await response.json();
            results.push(user);
        }
        // catch any errors and push null to the results array
        catch (error) {
            results.push(null);
        }
    }
    // return the results array as a promise
    return results;
}

async function createPost(data) {
    // create an object with the request options
    let options = {
        method: 'POST', // specify the HTTP method
        headers: {
            'Content-Type': 'application/json; charset=UTF-8' // specify the content type and encoding
        },
        body: JSON.stringify(data) // convert the data object to a JSON string
    };
    // make a fetch request with the url and the options
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    // parse the response as JSON and return it as a promise
    let post = await response.json();
    return post;
}
