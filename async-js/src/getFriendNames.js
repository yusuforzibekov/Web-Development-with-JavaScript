async function getFriendNames(userId) {
    // Make a call to the endpoint using the fetch function
    const response = await fetch(`https://example.com/users/${userId}/friends`);
    // Convert the response to a JSON object
    const data = await response.json();
    // Extract the names of the friends from the JSON object
    const names = data.map((friend) => friend.name);
    // Return an array of the names of the friends
    return names;
}

// Export the function as a named export
module.exports = {
    getFriendNames
};
