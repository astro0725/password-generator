// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to give criteria for password
function generatePassword() {
  var passwordLength = prompt("Enter the length of the password (8-128 characters):");
  // Validating password length
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Password length must be between 8 and 128 characters.");
      return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // asks user if they what kind of characters they want in their password
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("Please select at least one character type.");
      return "";
  }

// added valid characters to generate password
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericChars = "0123456789"
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?"


// uses variables for valid characters and aggregates the selected type into a single string for password generation
var selectedChars = "";
if (includeLowercase) selectedChars += lowercaseChars;
if (includeUppercase) selectedChars += uppercaseChars;
if (includeNumeric) selectedChars += numericChars;
if (includeSpecialChars) selectedChars += specialChars;

// this initializes the empty string to hold the generated password
var generatedPassword = ""
// starts a loop that will run until it equals the desired lenght
for (var i = 0; i < length; i++) {
  // generates a random index to pick a character from the selected character
    var randomIndex = Math.floor(Math.random() * selectedChars.length)
    // adds the character from the random index
    generatedPassword += selectedChars[randomIndex]
}

return generatedPassword
}

// Write password to the #password input
function writePassword() {
var password = generatePassword()
var passwordText = document.querySelector("#password")

passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)