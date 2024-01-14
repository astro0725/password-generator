// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to give criteria for password
function generatePassword() {
var length = parseInt(prompt("Enter password length (8-128 characters):"));

// validating length
if (isNaN(length) || length < 8 || length > 128) {
  alert("Please enter a valid password length between 8 and 128 characters.");
  return ""
}

var lowercase = confirm("Include lowercase characters?")
var uppercase = confirm("Include uppercase characters?")
var numeric = confirm("Include numeric characters?")
var specialChars = confirm("Include special characters?")

// added valid characters to generate password
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericChars = "0123456789"
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?"

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