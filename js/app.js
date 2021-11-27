
// get the form
const infoForm = document.getElementById("info_form");

// get the user's first name input
const firstName = document.getElementById("firstName");

// get the user's last name input
const lastName = document.getElementById("lastName");

// get the facilitator name the user inputted
const facilitator = document.getElementById("facilitator");


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

    // flags that indicate that whether values are valid, default to true
    let firstNameFlag = true;
    let lastNameFlag = true;
    let facilitatorFlag = true;

    // if the first name has a length less than 2 or 
    // it doesn't contain alpha characters, show error message
    if ((firstNameContents.length < 2) || !(/^[A-Z]+$/i.test(firstNameContents))) {
        showFirstNameErrorMessage();

        // set flag to show it's invalid
        firstNameFlag = false;
    }
    else {
        // show valid message
        showFirstNameValidMessage();
    }


    // if the last name has a length less than 2 or 
    // it doesn't contain alpha characters, show error message
    if ((lastNameContents.length < 2) || !(/^[A-Z]+$/i.test(lastNameContents))) {
        showLastNameErrorMessage();

        // set flag to show it's invalid
        lastNameFlag = false;
    }
    else {
        // show valid message
        showLastNameValidMessage();
    }


    // if the last name is not an exact match to any facilitator name, 
    // show error message (valid facilitators are: Fazil, Josh, Chris, or Christian.)
    if ((facilitatorContents.toLowerCase() !== "fazil") && (facilitatorContents.toLowerCase() !== "josh")  && 
    (facilitatorContents.toLowerCase() !== "chris") && (facilitatorContents.toLowerCase() !== "christian")) {
        showFacilitatorErrorMessage();

        // set flag to show it's invalid
        facilitatorFlag = false;
    }
    else {
        // show valid message
        showFacilitatorValidMessage();
    }


    // return false if any of the flags are false
    if ((firstNameFlag === false) || (lastNameFlag === false) || (facilitatorFlag === false)) {
        return false;
    }

    // otherwise, all fields are valid
    else {
        return true;
    }
}


/*
Function that is used to show an error message for an invalid
first name.
*/
function showFirstNameErrorMessage() {
    // first name error message to show the user 
    let msg = "First name must include only letters and be longer than 1 character.";

    // get the error message span for the first name
    const errorSpan = document.getElementById("first_name_error_msg");

    // change class of the span to be the negative feedback
    errorSpan.className = "neg_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}


/*
Function that is used to show that the user has provided a valid input 
for the first name.
*/
function showFirstNameValidMessage() {
    // first name error message to show the user 
    let msg = "Valid input!";

    // get the error message span for the first name
    const errorSpan = document.getElementById("first_name_error_msg");

    // change class of the span to be the positive feedback
    errorSpan.className = "pos_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}



/*
Function that is used to show an error message for an invalid
last name.
*/
function showLastNameErrorMessage() {

    // last name error message to show the user 
    let msg = "Last name must include only letters and be longer than 1 character.";

    // get the error message span for the last name
    const errorSpan = document.getElementById("last_name_error_msg");

    // change class of the span to be the negative feedback
    errorSpan.className = "neg_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}

/*
Function that is used to show that the user has provided a valid input 
for the last name.
*/
function showLastNameValidMessage() {
    // first name error message to show the user 
    let msg = "Valid input!";

    // get the error message span for the last name
    const errorSpan = document.getElementById("last_name_error_msg");

    // change class of the span to be the positive feedback
    errorSpan.className = "pos_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}


/*
Function that is used to show an error message for an invalid
facilitator name.
*/
function showFacilitatorErrorMessage() {

    // facilitator name error message to show the user 
    let msg = "Facilitator name can only be: Fazil, Josh, Chris, or Christian.";

    // get the error message span for the facilitator name
    const errorSpan = document.getElementById("facilitator_error_msg");

    // change class of the span to be the negative feedback
    errorSpan.className = "neg_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}


/*
Function that is used to show that the user has provided a valid input 
for the facilitator name.
*/
function showFacilitatorValidMessage() {
    // first name error message to show the user 
    let msg = "Valid input!";

    // get the error message span for the facilitator name
    const errorSpan = document.getElementById("facilitator_error_msg");

    // change class of the span to be the positive feedback
    errorSpan.className = "pos_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}