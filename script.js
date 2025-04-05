// This function generates a fortune message based on the user's name and age
function fortuneTeller(name, age) {
    let nameFortune = "";  // Will store the fortune related to the name
    let ageFortune = "";   // Will store the fortune related to the age

    // --- Name-based fortune rules ---

    // If the name is longer than 7 characters
    if (name.length > 7) {
        nameFortune += "will build lasting success through patience and persistence. ";
    }
    // If the name is shorter than 5 characters
    else if (name.length < 5) {
        nameFortune += "will soon find clarity in an important life decision. ";
    }
    // If the name length is between 5 and 7 (inclusive)
    else {
        nameFortune += "will be presented with an opportunity that requires courage. ";
    }

    // If the name starts with the letter 'R' (case-insensitive)
    if (name[0].toLowerCase() === 'r') {
        nameFortune += "Will be recognized for their unique talents. ";
    }

    // If the name contains the letter 'i' (case-insensitive)
    if (name.toLowerCase().includes('i')) {
        nameFortune += "Will experience meaningful connection with someone new. ";
    }

    // --- Age-based fortune rules ---

    if (age < 10) {
        ageFortune = "You are growing into someone curious, kind, and full of imagination.";
    } else if (age >= 10 && age <= 20) {
        ageFortune = "You will begin discovering what truly brings you joy.";
    } else if (age > 20 && age <= 40) {
        ageFortune = "You will make progress toward a goal that has felt out of reach.";
    } else {
        ageFortune = "You will find peace by letting go of old worries and embracing the present.";
    }

    // Combine both fortunes into one message and return it
    return `${name}, ${nameFortune}${ageFortune}`;
}

// This function is triggered when the user clicks the "Tell My Fortune" button
function tellFortune() {
    // Get the user's name from the input field
    const name = document.getElementById("name").value.trim();

    // Get the user's age and convert it from a string to a number
    const age = parseInt(document.getElementById("age").value);

    // Validate input: check if name is empty or age is not a number
    if (!name || isNaN(age)) {
        document.getElementById("fortune").innerText = "Please enter a valid name and age.";
        return;
    }

    // Call the fortuneTeller function and get the result
    const result = fortuneTeller(name, age);

    // Display the result inside the paragraph with id="fortune"
    document.getElementById("fortune").innerText = result;
}
