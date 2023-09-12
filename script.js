// Assignment code here
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var chosenLength = Number(prompt("How many characters in your password?"));
  if(isNaN(chosenLength) || chosenLength <8 || chosenLength >128) {
    alert("Password must be between 8-128 characters in length. Only numeric values will be accepted.")
    return ""
  }
  var includeLowercase = confirm("Would you like to use lowercase characters?");
  var includeUppercase = confirm("Would you like to use uppercase characters?");
  var numeric = confirm("Would you like to include numeric characters?");
  var special = confirm("Would you like to include special characters?");
  if(!includeLowercase && !includeUppercase && !numeric && !special) {
    alert("Must choose one character type.")
    return ""
  }
  var scrabbleTiles = []
  if(includeLowercase) scrabbleTiles = scrabbleTiles.concat(lowerCasedCharacters);
  if(includeUppercase) scrabbleTiles = scrabbleTiles.concat(upperCasedCharacters);
  if(numeric) scrabbleTiles = scrabbleTiles.concat(numericCharacters);
  if(special) scrabbleTiles = scrabbleTiles.concat(specialCharacters);
  console.log(scrabbleTiles);
  var finalPassword = ""
  for (let i = 0; i < chosenLength; i++) {
    var randomIndex = Math.floor(Math.random()*scrabbleTiles.length)
    var randomCharacter = scrabbleTiles[randomIndex]
    finalPassword += randomCharacter
  }
  return finalPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

