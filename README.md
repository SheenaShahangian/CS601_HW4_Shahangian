# Read Me - MET CS 601 Sheena Shahangian

To run this program, please open "homeworkform.html" in your browser. This page contains the form that you will need to fill out.

* The css folder contains the stylesheet, by the name of "styles.css".
* The multimedia folder contains a single image, that is my site's logo.
* The js folder contains my JavaScript file, by the name of "app.js".
* The program can be run by accessing my "homeworkform.html" file and filling out the form's contents and attempting to submit.

My form is structured as a form to gather information from students for a CS 601 dinner. As such, I gather information about their meal preferences and food allergies.


## GitHub

To view this project on GitHub, please visit this link: https://github.com/SheenaShahangian/CS601_HW4_Shahangian

The repository is public, however should you have any trouble accessing it, please do not hesitate to reach out to me. I can be reached at sheenas@bu.edu.


## Requested Elements

The form contains the following:

* There is a text input field for the user's first name. Per the instructions, I have included the "required" attribute to indicate that this is a required field.
* There is a text input field for the user's last name. Per the instructions, I have included the "required" attribute to indicate that this is a required field.
* There is a text input field for the user's facilitator's name. Per the instructions, I have included the "required" attribute to indicate that this is a required field.
* There is a group of radio buttons, which represent the different meal options a user can choose from. As a user can only choose one meal, radio buttons are a good fit.
* There is a group of checkboxes, which represent potential food allergies a user can select. As a user can have multiple food allergies, checkboxes are a good fit.
* The form page is styled using CSS.
* The form action points to the proper URL using the post method.

*  When it comes to first and last name validation, filling in the field is required. I have used the "required" attribute to accomplish this in my HTML. Beyond that, I have used JavaScript to validate that the first and last names are a minimum length of two characters (after I trim any whitespace, so that I don't accept responses that are just multiple spaces and nothing else). Furthermore, I ensure that only alpha characters are used (accepting lowercase and uppercase characters). The regex pattern I have used for these validations is: /^[A-Z]+$/i
*  When it comes to first and email validation, filling in the field is required. I have used the "required" attribute to accomplish this in my HTML. Beyond that, I have used JavaScript to validate that the email address is a valid email. While HTML5 does have a form of email validation built in, I wanted my contact form to be more robust, so I sourced an email validation regex from this source: http://zparacha.com/validate-email-address-using-javascript-regular-expression, which provided an excellent explanation of how this regex pattern is broken down and why it works.
*  When it comes to facilitator name validation, again, filling in the field is required. I have used the "required" attribute to accomplish this in my HTML. Beyond that, I have used JavaScript to validate that the name is an exact match of one of the facilitator's name (case insensitive). Valid facilitator names include: Fazil, Josh, Chris, or Christian (all case insensitive, as I use the toLowerCase() method to convert inputs before analyzing them).
*  If any of these required fields are not filled out or are not valid, the form will not submit. The same does not apply to the radio buttons and checkboxes, as those, per the instructions aren't required.

### Incorporation of Other Additional Elements - How I Went Above and Beyond

I've attempted to add some new features beyond the standard requirements listed in the rubric. These include: 

* I have tested my program in Google Chrome, Firefox, and Safari to ensure it works as expected in multiple browsers.
* I have added an additional email input, that includes email validation checks.
* I have ensured that error messages (and valid messages) are written to the DOM **and** styled. Here's how it works:
  * When a user fills out the form invalidly and attempts to submit, the default submit action doesn't work, and you will see error or success text underneath all text and email inputs. The success text is in green, showing you that that specific field is valid. The error text is in red, showing you that the specific field is invalid. I have opted to use not only just color, but also text (in a bold typeface) so that even colorblind people can easily see where their errors and successes are. If, for example, you fix one error and not another, and you re-submit, the fixed field will now show a  success validation styled to the DOM underneath that field, but the field that wasn't fixed will still show the error message styled to the DOM underneath that field.
* The error messages don't simply say "error". They are meaningful and make clear what type of inputs are allowed. This is done to ensure that the user can easily fix their issues and submit the form successfully.

* Per the professor's recommendation, I have opted to use let and const rather than var for declaring my variables, as I wanted to experiment with having block level scope, which var does not offer.
* I have thoroughly commented all of my code, to make it easy to understand and come back to in the future.