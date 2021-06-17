// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


// lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
function generatePassword() {
  var lengthGen = lengthGenerator();
  var lowerC = lowerCaseGen();
  var upperC = upperCaseGen();
  var nums = numberGen();
  var specialChars = specialCharGen();

  // length between 8-128
  function lengthGenerator() {
    window.prompt("How Many characters do you want your password to have, between 8 and 128")
  
  }

  function lowerCaseGen() {
    var LCIndex = "abcdefghijklmnopqrstuvwxyz";
    window.prompt("How Many characters do you want your password to have, between 8 and 128")
  
  }

  function upperCaseGen() {
    var UCIndex =   "ABCDEFGHIJKLMNOPQRSTUVWZYX";
    window.prompt("How Many characters do you want your password to have, between 8 and 128")
  
  }

  function numberGen() {
    var NumIndex = "0123456789";
    window.prompt("How Many characters do you want your password to have, between 8 and 128")
  
  }

  function specialCharGen() {
    var Specindex = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    window.prompt("How Many characters do you want your password to have, between 8 and 128")
  
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
