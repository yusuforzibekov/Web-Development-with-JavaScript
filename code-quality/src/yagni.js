// This function searches the employees array and returns an array of employees 
// who have a string from the search parameter in the name property of an employee object
export function searchEmployees(employees, search) {
    // Filter the employees array by the name property
    const filteredEmployees = employees.filter((employee) => {
        // Return true if the name property includes the search parameter (both converted to lowercase)
        return employee.name.toLowerCase().includes(search.toLowerCase());
    });

    // Return the filtered employees array
    return filteredEmployees;
}