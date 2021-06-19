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
  var length = lengthGenerator();
  var lowerC = lowerCaseGen();
  var upperC = upperCaseGen();
  var nums = numberGen();
  var specialChars = specialCharGen();

  // length between 8-128
  function lengthGenerator() {
    var pWordLength = prompt("How Many characters do you want your password to have, between 8 and 128");
    console.log(pWordLength)
  }

  function lowerCaseGen() {
    var LCIndex = "abcdefghijklmnopqrstuvwxyz".split(
      ''
      );
      
      var lowerCAnswer = prompt("Do you want lower case letters")
      console.log(lowerCAnswer)
  }

  function upperCaseGen() {
    var UCIndex = "ABCDEFGHIJKLMNOPQRSTUVWZYX".split(
      ''
    );
    var upperCAnswer = prompt("Do you want upper case letters")
      console.log(upperCAnswer)
  
  }

  function numberGen() {
    var NumIndex = "0123456789".split(
      ''
    );
    
    var numAnswer = prompt("Do you want numbers")
      console.log(numAnswer)
  
  }

  function specialCharGen() {
    var Specindex = "!#$%&'()*+,-.\"/:;<=>?@[]^_`\\{|}~".split( 
      ''
    );
    var specialAnswer = prompt("Do you want special characters")
      console.log(specialAnswer)
  
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
