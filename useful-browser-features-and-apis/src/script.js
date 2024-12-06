function getUrlData() {
    const currentURL = window.location.href;
    const urlObject = new URL(currentURL);

    const domain = urlObject.hostname;
    const protocol = urlObject.protocol;
    const fullURL = currentURL;

    // Extract query parameters
    const query = {};
    urlObject.searchParams.forEach((value, key) => {
        query[key] = value;
    });

    return {
        fullURL,
        domain,
        protocol,
        query,
    };
}

function getQueryParametersValues() {
    const currentURL = window.location.href;
    const urlObject = new URL(currentURL);

    const queryValues = [];

    // Iterate through the search parameters and push their values to the array
    urlObject.searchParams.forEach((value) => {
        queryValues.push(value);
    });

    return queryValues;
}

function setLocalStorageData(data) {
    // Check if data is a non-empty string
    if (typeof data === 'string' && data.trim() !== '') {
        // Set data to local storage with a key
        localStorage.setItem('key', data);
        return true;
    } else {
        // If data is not a string or is an empty string, return false
        return false;
    }
}

function setCookieData(data) {
    // check if data is a string and not an empty string
    if (typeof data === "string" && data.length > 0) {
        // set a cookie with a key and the data value
        document.cookie = data;
        // return true
        return true;
    }
    // return false
    return false;
}
