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
    if (pWordLength <= 128 && pWordLength >= 8) {
      window.alert("you choose " + pWordLength);
      console.log(pWordLength)
    }
    else { window.alert("you must choose a number between 8 and 128")
      lengthGenerator() };
    // recursion 
    // pWordLength =prompt

  }

  function lowerCaseGen() {
    var LCIndex = "abcdefghijklmnopqrstuvwxyz".split(
      ''
    );

    var lowerCAnswer = prompt("Do you want lower case letters, Y or N");

    lowerCAnswer = lowerCAnswer.toUpperCase();
    if (lowerCAnswer == "Y") {
      console.log("lower case yip");
      window.alert("you choose " + lowerCAnswer);
    } else if (lowerCAnswer == "N") {
      window.alert("you choose " + lowerCAnswer)
      console.log("lower case Nip");
    } else {
      window.alert("you must choose y or n, I believe in you");
      lowerCaseGen()
    };


  }

  function upperCaseGen() {
    var UCIndex = "ABCDEFGHIJKLMNOPQRSTUVWZYX".split(
      ''
    );

    var upperCAnswer = prompt("Do you want upper case letters, Y or N")

    upperCAnswer = upperCAnswer.toUpperCase();
    if (upperCAnswer == "Y") {
      console.log("upper case yip");
      window.alert("you choose " + upperCAnswer);
    } else if (upperCAnswer == "N") {
      window.alert("you choose " + upperCAnswer)
      console.log("upper case Nip");
    } else {
      window.alert("you must choose y or n, I believe in you");
      upperCaseGen()
    };


  }

  function numberGen() {
    var NumIndex = "0123456789".split(
      ''
    );

    var numAnswer = prompt("Do you want numbers Y or N")

    numAnswer = numAnswer.toUpperCase();
    if (numAnswer == "Y") {
      console.log("numbers yip");
      window.alert("you choose " + numAnswer);
    } else if (numAnswer == "N") {
      window.alert("you choose " + numAnswer)
      console.log("numbers Nip");
    } else {
      window.alert("you must choose y or n, I believe in you");
      numberGen()
    };


  }

  function specialCharGen() {
    var Specindex = "!#$%&'()*+,-.\"/:;<=>?@[]^_`\\{|}~".split(
      ''
    );
    var specialAnswer = prompt("Do you want special characters, Y or N")

    specialAnswer = specialAnswer.toUpperCase();
    if (specialAnswer == "Y") {
      console.log("special yip");
      window.alert("you choose " + specialAnswer);
    } else if (specialAnswer == "N") {
      window.alert("you choose " + specialAnswer)
      console.log("numbers Nip");
    } else {
      window.alert("you must choose y or n, I believe in you");
      specialCharGen()
    };
    
    

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
