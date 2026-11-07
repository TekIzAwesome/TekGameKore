// Global variable to store the user's name
var userName = ""; // Global variable to save the name entered in step 1
var userSuperpower = ""; // Global variable to store superpower

// Function to move from the name prompt to the age prompt
function goToAgeStep() {
    // Get the name input value and trim any extra spaces.
    const name = document.getElementById('nameInput').value.trim(); // Using modal input field for name

    // Check if the name is empty
    if (name === "") {
        alert("What is your superhero identity?"); // Prompt for non-empty name
        return;
    }

    // Added check: if the user types an integer (numeric value) for the name question.
    if (!isNaN(name)) { // If the name is actually numeric
        alert("Sorry, you are not qualified to join TekGameKore"); // Deny entry with error message
        console.log("Sorry, you are not qualifed to join TekGameKore");
        document.getElementById("result").innerText = "Sorry, you are not qualified to join TekGameKore";
        return;
    }

    userName = name; // Save the name in the global variable

    // Hide the first step (name input) and show the second step (age input)
    document.getElementById("step1").style.display = "none"; // Hide name prompt
    document.getElementById("step2").style.display = "block"; // Display age prompt
}

// Updated main function to display results in-modal instead of alerts
function main() {
    // Get the superpower input value from the modal
    const superpower = document.getElementById('superpowerInput').value.trim(); // Corrected ID

    // Validate the superpower
    if (superpower === "") {
        // Display result in modal and keep it visible
        document.getElementById("result").innerText = "Please enter a superpower";
        return;
    }
    if (!isNaN(superpower)) { // If the name is actually numeric
        alert("Sorry, you are not qualified to join TekGameKore"); // Deny entry with error message
        console.log("Sorry, you are not qualified to join TekGameKore");
        document.getElementById("result").innerText = "Sorry you are not qualified to join TekGameCore";
        return;
    }

    userSuperpower = superpower;

        // Display result in modal and keep it visible
        document.getElementById("result").innerText = "Congradulations " + userName + "! Your superpower is " + userSuperpower + "." +  " Welcome to TekGameKore!"; //Added userSuperpower
        console.log("Congrats " + userName + " Your superpower is " + userSuperpower + "." + "Welcome to TekGameKore" + "!"); //Added userSuperpower


    // Optional: Add delay before hiding modal if desired
    setTimeout(() => {
         document.getElementById("modalOverlay").style.display = "none";
     }, 2000); // Hides after 2 seconds
}

// Function to check if the given input can be parsed to a valid integer
function checkInt(input) {
    // Attempt to parse the input as an integer (base 10)
    const num = parseInt(input, 10);
    // Return true if the result is a valid number (not NaN)
    return !isNaN(num);
}

// Attach event listeners to the step buttons when the window loads
window.addEventListener("load", function() {
    const activateBtn = document.getElementById("activateBtn");
    if (activateBtn) {
        activateBtn.addEventListener("click", function() {
            // Show the prompt container (set display to block)
            document.getElementById("modalOverlay").style.display = "block";
        });
    }
    
    const nextBtn1 = document.getElementById("nextBtn1");
    if (nextBtn1) {
        // When "Next" is clicked, invoke goToAgeStep()
        nextBtn1.addEventListener("click", goToAgeStep); // Existing event listener for the "Next" button in step 1
    }
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        // When "Submit" is clicked, validate the age input
        submitBtn.addEventListener("click", main); // Existing event listener for the "Submit" button in step 2
    }
    
    // Added keydown listener for the name input field to trigger Next on Enter
    const nameInputField = document.getElementById("nameInput");
    if (nameInputField) {
        nameInputField.addEventListener("keydown", function(event) {
            if (event.key === "Enter") { // When the Enter key is pressed...
                event.preventDefault(); // Prevent any default action (e.g., form submission)
                goToAgeStep(); // Call the same function as the Next button
            }
        });
    }
    
    // Added keydown listener for the age input field to trigger Submit on Enter
    // const ageInputField = document.getElementById("ageInput"); //COMMENTED OUT: ageInput does not exist
    // if (ageInputField) {
    //     ageInputField.addEventListener("keydown", function(event) {
    //         if (event.key === "Enter") { // When the Enter key is pressed...
    //             event.preventDefault(); // Prevent any default action
    //             main(); // Call the same function as the Submit button
    //         }
    //     });
    // }
        // Added keydown listener for the superpower input field to trigger Submit on Enter
        const superpowerInputField = document.getElementById("superpowerInput"); // Use new ID
        if (superpowerInputField) {
            superpowerInputField.addEventListener("keydown", function(event) {
                if (event.key === "Enter") { // When the Enter key is pressed...
                    event.preventDefault(); // Prevent any default action
                    main(); // Call the same function as the Submit button
                }
            });
        }
});