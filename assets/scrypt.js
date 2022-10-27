// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "01234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()"; 
var passwordLenghit = 12

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword();