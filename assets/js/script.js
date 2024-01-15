// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to give criteria for password
function generatePassword() {
  const passwordLength = prompt("Enter the length of the password (8-128 characters):");

  // validating password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  // variables for alert prompts
  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  // asks user if they what kind of characters they want in their password
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // valid characters to generate password
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // uses variables for valid characters and aggregates the selected type into a single string for password generation
  let selectedChars = "";
  if (includeLowercase) selectedChars += lowercaseChars;
  if (includeUppercase) selectedChars += uppercaseChars;
  if (includeNumeric) selectedChars += numericChars;
  if (includeSpecial) selectedChars += specialChars;

  // this initializes the empty string to hold the generated password
  let generatedPassword = "";
  // starts a loop that will run until it equals the desired length
  for (let i = 0; i < passwordLength; i++) {
    // generates a random index to pick a character from the selected characters
    const randomIndex = Math.floor(Math.random() * selectedChars.length);
    // adds the character from the random index
    generatedPassword += selectedChars[randomIndex];
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
