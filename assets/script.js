// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable for password length
var passwordLength = 0;

// Combined string of characters for password generation
var selectedChars = "";

// Password options stored as array, all set true initially
// lowercase, uppercase, numeric, special
var options = [true, true, true, true];

// Does the password contain at least one character from the selected character sets
var validPassword = [false, false, false, false];

// Variable to contain the final generated password
var generatedPassword = "";

// Character sets
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = alphaLower.toUpperCase();
var numeric = "0123456789";
var specChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";   // Space character excluded

function getPasswordLength() {
    passwordLength = 0;
    // Ask user for desired number of characters in password, validate the input, default = 8 characters
    while (true) {
      passwordLength = prompt("What length of password do you require? \n8 character minimum, 128 character maximum", 8);
      //Abort if null
      if (passwordLength == null) {
        return false;
      }
      //Check for valid password length, exit function if valid
      if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
        return true;
      }
    }
  }
  
  function notOptions() {
    for (var i = 0; i < options.length; i++) {
      validPassword[i] = !options[i];
    }
  }
  
  function getPasswordCharSet(allCharacters) {
    // Check arrays of equal length
    if (allCharacters.length !== options.length) {
      return false;
    }
    // Ask user for password character criteria, store in array for future use, check at least one character set is selected
    var isValid = false;
    while (!isValid) {
      options[0] = confirm("Include lowercase characters in the password?");
      options[1] = confirm("Include uppercase characters in the password?");
      options[2] = confirm("Include numeric characters in the password?");
      options[3] = confirm("Include special characters in the password?");
      notOptions();
      if (options.indexOf(true) !== -1) {
        console.log("Password criteria: (lowercase, uppercase, numeric, special)", options);
        isValid = true;
      }
      else {
        alert("Please select at least one character set!");
      }
    }
    // Generate combined string of charcters from user selection
    selectedChars = "";
    for (var i = 0; i < options.length; i++) {
      if (options[i]) {
        selectedChars += allCharacters[i];
      }
    }
    return true;
  }
  
  // Function to generate a random number between 0 and 'upperLimit' - 'upperLimit' exclusive
  function getRandom(upperLimit) {
    return Math.floor(Math.random() * upperLimit);
  }
  
  function MakePassword(requiredPasswordLength) {
    notOptions();
    generatedPassword = "";
    for (var j = 0; j < requiredPasswordLength; j++) {
      var nextChar = selectedChars[getRandom(selectedChars.length)];
      generatedPassword += nextChar;
      charValidate(nextChar);
    }
    console.log("Generated Password: ", generatedPassword, "Password Length: ", generatedPassword.length);
  }