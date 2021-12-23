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
