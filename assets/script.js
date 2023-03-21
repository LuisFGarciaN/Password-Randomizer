// Assignment code here
var generateBtn = document.querySelector("#generate");

// Array of character types to include in the password.
var charTypes = [
  "lowercase",
  "uppercase",
  "numeric",
  "special characters"
];

// Sets the characters to each category.
var charSets = {
  "lowercase": "abcdefghijklmnopqrstuvwxyz",
  "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "numeric": "0123456789",
  "special characters": "!#$%&()*+,-./:;<=>?@[]^_`{|}~"
};

// Define length of the password.
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  // Verification to meet length criteria. 
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Type of characters to include.
  var charTypeSelections = [];
  for (var i = 0; i < charTypes.length; i++) {
    var includeCharType = confirm("Include " + charTypes[i] + " characters?");
    if (includeCharType) {
      charTypeSelections.push(charTypes[i]);
    }
  }

  // Check if at least one character type was selected.
  if (charTypeSelections.length === 0) {
    alert("Please select at least one character type to include in the password.");
    return;
  }

  // Generate password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    
    // Randomly select a character type
    var randomCharType = charTypeSelections[Math.floor(Math.random() * charTypeSelections.length)];

    // Get corresponding character set for selected type
    var charSet = charSets[randomCharType];

    // Randomly select a character from the set and add it to the password
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));

  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password || "";
}

// Get references to the #generate element and #password element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
