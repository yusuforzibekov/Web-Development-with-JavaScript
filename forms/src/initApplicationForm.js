export function initApplicationForm() {

    // Get the input elements by their ids
    const personTitleField = document.getElementById('person-title-field');
    const jobTitleField = document.getElementById('job-title');
    const jobTitleDescriptionWrapper = document.getElementById('job-title-description-wrapper');
    const oneTimeCodeField = document.getElementById('one-time-code');
    const showOneTimeCodeCheckbox = document.getElementById('show-one-time-code');
    const firstNameField = document.getElementById('firstname');
    const lastNameField = document.getElementById('lastname');
    const githubAccountNameField = document.getElementById('github-account-name');
    const emailField = document.getElementById('email');
    const topicField = document.getElementById('topic');
    const topicDescriptionField = document.getElementById('topic-description');

    // Get the form element by its class
    const form = document.querySelector('.application-form');

    // Create datalists for autocomplete
    const personTitleList = document.createElement('datalist');
    personTitleList.id = 'person-title-list';
    const personTitleOptions = ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Other'];
    for (let option of personTitleOptions) {
        let optionElement = document.createElement('option');
        optionElement.value = option;
        personTitleList.appendChild(optionElement);
    }

    // Append the datalist to the person title field
    personTitleField.appendChild(personTitleList);
    // Set the list attribute of the person title field to the id of the datalist
    personTitleField.setAttribute('list', 'person-title-list');

    // Create another datalist for the job title field
    const jobTitleList = document.createElement('datalist');
    jobTitleList.id = 'job-title-list';
    const jobTitleOptions = ['Junior Developer', 'Middle Developer', 'Senior Developer', 'Other'];
    for (let option of jobTitleOptions) {
        let optionElement = document.createElement('option');
        optionElement.value = option;
        jobTitleList.appendChild(optionElement);
    }

    // Append the datalist to the job title field
    jobTitleField.appendChild(jobTitleList);
    // Set the list attribute of the job title field to the id of the datalist
    jobTitleField.setAttribute('list', 'job-title-list');

    // Set the autocomplete attribute for the input fields
    personTitleField.setAttribute('autocomplete', 'honorific-prefix');
    firstNameField.setAttribute('autocomplete', 'given-name');
    lastNameField.setAttribute('autocomplete', 'family-name');
    githubAccountNameField.setAttribute('autocomplete', 'username');
    emailField.setAttribute('autocomplete', 'email');
    jobTitleField.setAttribute('autocomplete', 'organization-title');

    // Add a change event listener to the job title field
    jobTitleField.addEventListener('change', () => {
        // If the job title field is empty, the job title description wrapper should remain hidden
        if (jobTitleField.value === '') {
            jobTitleDescriptionWrapper.classList.add('hidden');
        } else {
            // If the job title field has a custom value, the job title description wrapper should be hidden
            if (jobTitleOptions.includes(jobTitleField.value)) {
                jobTitleDescriptionWrapper.classList.add('hidden');
            } else {
                // If the job title field has one of the known values, the job title description wrapper should be shown    
                jobTitleDescriptionWrapper.classList.remove('hidden');
            }
        }
    });

    // Add a change event listener to the show one time code checkbox
    showOneTimeCodeCheckbox.addEventListener('change', () => {
        // If the checkbox is checked, change the type of the one time code field to text
        if (showOneTimeCodeCheckbox.checked) {
            oneTimeCodeField.setAttribute('type', 'text');
        } else {
            // Otherwise, change the type of the one time code field to password
            oneTimeCodeField.setAttribute('type', 'password');
        }
    });

    // Define a function to validate an input field
    function validateField(field) {
        // If the field is empty or has only spaces, add an invalid class and set the validity to false
        if (field.value.trim() === '') {
            field.classList.add('application-form__input_invalid');
            field.setCustomValidity('This field is required');
        } else {
            // Otherwise, remove the invalid class and set the validity to true
            field.classList.remove('application-form__input_invalid');
            field.setCustomValidity('');
        }
    }

    // Define a function to remove the invalid class on focus
    function removeInvalidClass(field) {
        field.classList.remove('application-form__input_invalid');
    }

    // Add focus and blur event listeners to the first name and last name fields
    firstNameField.addEventListener('focus', () => {
        removeInvalidClass(firstNameField);
    });
    firstNameField.addEventListener('blur', () => {
        validateField(firstNameField);
    });
    lastNameField.addEventListener('focus', () => {
        removeInvalidClass(lastNameField);
    });
    lastNameField.addEventListener('blur', () => {
        validateField(lastNameField);
    });

    // Add an event listener to the submit button
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Create a new FormData object within the submit event handler
        const formDataObject = new FormData();

        // Append form data to the FormData object
        formDataObject.append('person-title-field', personTitleField.value);
        formDataObject.append('firstname', firstNameField.value);
        formDataObject.append('lastname', lastNameField.value);
        formDataObject.append('github-account-name', githubAccountNameField.value);
        formDataObject.append('email', emailField.value);
        formDataObject.append('job-title', jobTitleField.value);
        formDataObject.append('one-time-code', oneTimeCodeField.value);
        formDataObject.append('topic', topicField.value);
        formDataObject.append('topic-description', topicDescriptionField.value);

        // Conditionally delete 'job-title-description' from FormData
        if (!['Junior Developer', 'Middle Developer', 'Senior Developer'].includes(jobTitleField.value)) {
            formDataObject.delete('job-title-description');
        }

        // Send the FormData to the specified server
        fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formDataObject
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    });
}
