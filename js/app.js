
// get the form
const infoForm = document.getElementById("info_form");

// get the user's first name input
const firstName = document.getElementById("firstName");

// get the user's last name input
const lastName = document.getElementById("lastName");

// get the facilitator name the user inputted
const facilitator = document.getElementById("facilitator");

// get the user's email address input
const email = document.getElementById("email");



// event listener for when the user clicks the form's submit button
infoForm.addEventListener("submit", (e) => {

    // call function that validates the inputs
    if (validateUserInput() === false) {
        e.preventDefault();
    }
});



/*
Function that validates the user's inputs.
*/
function validateUserInput() {

    // get the contents of the user's inputs and remove whitespace
    const firstNameContents = firstName.value.trim();
    const lastNameContents = lastName.value.trim();
    const facilitatorContents = facilitator.value.trim();
    const emailContents = email.value.trim();

    // flags that indicate that whether values are valid, default to true
    let firstNameFlag = true;
    let lastNameFlag = true;
    let facilitatorFlag = true;
    let emailFlag = true;

    // valid input message to the user, when there are no input problems
    let validMsg = "Valid input!";

    // if the first name has a length less than 2 or 
    // it doesn't contain alpha characters, show error message
    if ((firstNameContents.length < 2) || !(/^[A-Z]+$/i.test(firstNameContents))) {

        // first name error message to show the user 
        let firstNameErrorMsg = "First name must include only letters and be longer than 1 character.";
        
        // show invalid message next to first name input field
        showErrorMessage(firstNameErrorMsg, "first_name_error_msg");

        // set flag to show it's invalid
        firstNameFlag = false;
    }
    else {
        // show valid message next to first name input field
        showValidMessage(validMsg, "first_name_error_msg");
    }


    // if the last name has a length less than 2 or 
    // it doesn't contain alpha characters, show error message
    if ((lastNameContents.length < 2) || !(/^[A-Z]+$/i.test(lastNameContents))) {

        // last name error message to show the user 
        let lastNameErrorMsg = "Last name must include only letters and be longer than 1 character.";
        
        // show invalid message next to last name input field
        showErrorMessage(lastNameErrorMsg, "last_name_error_msg");

        // set flag to show it's invalid
        lastNameFlag = false;
    }
    else {
        // show valid message next to last name input field
        showValidMessage(validMsg, "last_name_error_msg");
    }


    // If the last name is not an exact match to any facilitator name, 
    // show error message (valid facilitators are: Fazil, Josh, Chris, or Christian).
    // Accepts all capitalizations and convert to lowercase.
    if ((facilitatorContents.toLowerCase() !== "fazil") && (facilitatorContents.toLowerCase() !== "josh")  && 
    (facilitatorContents.toLowerCase() !== "chris") && (facilitatorContents.toLowerCase() !== "christian")) {
        
        // facilitator name error message to show the user 
        let facilitatorErrorMsg = "Facilitator name can only be: Fazil, Josh, Chris, or Christian.";
        
        // show invalid message next to facilitator input field
        showErrorMessage(facilitatorErrorMsg, "facilitator_error_msg");

        // set flag to show it's invalid
        facilitatorFlag = false;
    }
    else {
        // show valid message next to facilitator input field
        showValidMessage(validMsg, "facilitator_error_msg");
    }


    // if the user's inputted email is not a valid email address, 
    // show an error message
    
    // email regex used for validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailContents)) {

        // email error message to show the user 
        let emailErrorMsg = "That's not a valid email.";
        
        // show invalid message next to email input field
        showErrorMessage(emailErrorMsg, "email_error_msg");

        // set flag to show it's invalid
        emailFlag = false;

    }
    else {
        // show valid message next to email input field
        showValidMessage(validMsg, "email_error_msg");
    }


    // return false if any of the flags are false
    if ((firstNameFlag === false) || (lastNameFlag === false) || (facilitatorFlag === false) || (emailFlag === false)) {
        return false; // this indicates form should not submit yet
    }

    // otherwise, all fields are valid
    else {
        return true; // this indicates form can submit now
    }
}


/*
Function that is used to show an error message for an invalid input.
*/
function showErrorMessage(msg, elementId) {

    // get the error message span for the first name
    const errorSpan = document.getElementById(elementId);

    // change class of the span to be the negative feedback
    errorSpan.className = "neg_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}

/*
Function that is used to show an valid message for an valid input.
*/
function showValidMessage(msg, elementId) {

    // get the error message span for the first name
    const errorSpan = document.getElementById(elementId);

    // change class of the span to be the positive feedback
    errorSpan.className = "pos_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}