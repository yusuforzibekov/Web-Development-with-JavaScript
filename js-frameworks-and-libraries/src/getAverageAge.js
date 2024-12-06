export function getAverageAge(arr) {
    const uniqueUsers = _.uniqBy(arr, 'name'); // Remove duplicates by name
    const totalAge = _.sumBy(uniqueUsers, 'age'); // Sum the ages of unique users
    return totalAge / uniqueUsers.length || 0; // Return the average
}
