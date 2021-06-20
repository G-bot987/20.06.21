// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function rndmLower() {
//   return String.fromCharCode(Math.floor(Math.random() *26) +96);
// }

// function rndmUpper() {
//   return String.fromCharCode(Math.floor(Math.random() *26) +64);
// }

// function rndmNum() {
//   return String.fromCharCode(Math.floor(Math.random() *10) +47);
// }




console.log(String.fromCharCode(57));


// lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
function generatePassword() {
  var length = lengthGenerator();
  var lowerC = lowerCaseGen();
  var upperC = upperCaseGen();
  var nums = numberGen();
  var specialChars = specialCharGen();

  // length between 8-128
  // confirm
  function lengthGenerator() {
    var pWordLength = prompt("How Many characters do you want your password to have, between 8 and 128");


    if (pWordLength <= 128 && pWordLength >= 8) {
      window.alert("you choose " + pWordLength);
      var pWordNum = parseInt(pWordLength);
      console.log(typeof pWordNum + pWordNum);
    }
    else { window.alert("you must choose a number between 8 and 128")
      lengthGenerator() };
    

  }

  function lowerCaseGen() {
    var LCIndex = "abcdefghijklmnopqrstuvwxyz".split(
      ''
    );

    var lowerCAnswer = confirm("Do you want lower case letters");

    
    console.log(lowerCAnswer)
    if (lowerCAnswer == true) {
      console.log("lower case" + lowerCAnswer );
      window.alert("you choose " + lowerCAnswer);
    } else if (lowerCAnswer == false) {
      window.alert("you choose " + lowerCAnswer)
      console.log("lower case" + false);
    } else {
      window.alert("you must choose y or n, I believe in you");
      lowerCaseGen()
    };


  }

  function upperCaseGen() {
    var UCIndex = "ABCDEFGHIJKLMNOPQRSTUVWZYX".split(
      ''
    );

    var upperCAnswer = confirm("Do you want upper case letters")

    
    if (upperCAnswer == true) {
      console.log("upper case" + upperCAnswer);
      window.alert("you choose " + upperCAnswer);
    } else if (upperCAnswer == false) {
      window.alert("you choose " + upperCAnswer)
      console.log("upper case" + upperCAnswer);
    } else {
      window.alert("you must choose y or n, I believe in you");
      upperCaseGen()
    };


  }

  function numberGen() {
    var NumIndex = "0123456789".split(
      ''
    );

    var numAnswer = confirm("Do you want numbers")

    
    if (numAnswer == true) {
      console.log("numbers " + numAnswer);
      window.alert("you choose " + numAnswer);
    } else if (numAnswer == false) {
      window.alert("you choose " + numAnswer)
      console.log("numbers " + numAnswer  );
    } else {
      window.alert("you must choose y or n, I believe in you");
      numberGen()
    };


  }

  function specialCharGen() {
    var Specindex = "!#$%&'()*+,-.\"/:;<=>?@[]^_`\\{|}~".split(
      ''
    );
    var specialAnswer = confirm("Do you want special characters")

    if (specialAnswer == true) {
      console.log("special " + specialAnswer);
      window.alert("you choose " + specialAnswer);
    } else if (specialAnswer == false) {
      window.alert("you choose " + specialAnswer)
      console.log("numbers" + specialAnswer);
    } else {
      window.alert("you must choose y or n, I believe in you");
      specialCharGen()
    };
    
    

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
