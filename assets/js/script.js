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

var lowercase = confirm("Include lowercase characters?")
var uppercase = confirm("Include uppercase characters?")
var numeric = confirm("Include numeric characters?")
var specialChars = confirm("Include special characters?")

// set prompt to ensure user selects one or more different characters
if (!lowercase && !uppercase && !numeric && !specialChars) {
  alert("Please select at least one character type.");
  return "";
}

// added valid characters to generate password
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericChars = "0123456789"
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?"


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