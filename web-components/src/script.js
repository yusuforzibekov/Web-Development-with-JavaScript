class MyCounter extends HTMLElement {
    constructor() {
        super();

        // create a shadow root
        const shadow = this.attachShadow({
            mode: 'open'
        });

        // create a span element to display the count
        const span = document.createElement('span');
        span.id = 'count';
        span.textContent = '0'; // start value for count

        // create a button element to increment the count
        const increment = document.createElement('button');
        increment.id = 'increment';
        increment.textContent = '+';
        increment.addEventListener('click', () => {
            // get the current count from the span element
            let count = parseInt(span.textContent);
            // increment the count by one
            count++;
            // update the span element with the new count
            span.textContent = count;
        });

        // create a button element to decrement the count
        const decrement = document.createElement('button');
        decrement.id = 'decrement';
        decrement.textContent = '-';
        decrement.addEventListener('click', () => {
            // get the current count from the span element
            let count = parseInt(span.textContent);
            // decrement the count by one if it is not zero
            if (count > 0) {
                count--;
            }
            // update the span element with the new count
            span.textContent = count;
        });

        // append the elements to the shadow root
        shadow.appendChild(span);
        shadow.appendChild(increment);
        shadow.appendChild(decrement);
    }
};

// define the custom element
customElements.define('my-counter', MyCounter);

class DrawSquare extends HTMLElement {
    constructor() {
        super();

        // create a shadow root
        const shadow = this.attachShadow({
            mode: 'open'
        });

        // create a div element to display the square
        const div = document.createElement('div');
        div.style.width = '100px'; // set the width to 100px
        div.style.height = '100px'; // set the height to 100px
        div.style.backgroundColor = 'red'; // set the background color to red

        // append the div element to the shadow root
        shadow.appendChild(div);
    }
}

// define the custom element
customElements.define('draw-square', DrawSquare);

class UserCard extends HTMLElement {
    constructor() {
        super();

        // create a shadow root
        const shadow = this.attachShadow({
            mode: 'open'
        });

        // create a slot element to display the user's first name
        const firstname = document.createElement('slot');
        firstname.name = 'firstname'; // set the name attribute to 'firstname'

        // create a slot element to display the user's last name
        const lastname = document.createElement('slot');
        lastname.name = 'lastname'; // set the name attribute to 'lastname'

        // append the slot elements to the shadow root
        shadow.appendChild(firstname);
        shadow.appendChild(lastname);
    }
}

// define the custom element
customElements.define('user-card', UserCard);