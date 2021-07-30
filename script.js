// Assignment Code
var generateBtn = document.querySelector("#generate");


const numbers = '0123456789';
const speicalChars = '!"£$%^&*()_+=-';
const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpper = alphabetLower.toUpperCase();
// generate pword critera
const state = {
  passwordLength: 0,
  isUpperCase: false,
  isNumber: false,
  isSpecial: false,
  isLowerCase: false,
}
let charset = '';
function pwordGenCriteria() {
  // pword length
  var pWordLength = prompt("How Many characters do you want your password to have, between 8 and 128");


  if (pWordLength <= 128 && pWordLength >= 8) {
    alert("you choose " + pWordLength);
    state.passwordLength = parseInt(pWordLength);
  }
  else {
    alert("you must choose a number between 8 and 128");
    pwordGenCriteria();
    return;
  };
  // lowercase 
  state.isLowerCase = confirm('is lower');

  // uppercase
  state.isUpperCase = confirm('is uppper');

  // number
  state.isNumber = confirm('is number');

  // special
  state.isSpecial = confirm('is special');
}


// lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
function generatePassword() {
  if (state.isLowerCase) {
    charset += alphabetLower;
  }

  if (state.isUpperCase) {
    charset += alphabetUpper;
  }

  if (state.isSpecial) {
    charset += speicalChars;
  }

  if (state.isNumber) {
    charset += numbers;
  }
  var retVal = "";
  for (var i = 0, n = charset.length; i < state.passwordLength; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Write password to the #password input
function writePassword() {
  pwordGenCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





