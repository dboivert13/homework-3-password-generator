// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// PASSWORD LENGTH ----------------------------------------------------------------

var passwordLength = prompt ("Your password must be atleast 8 characters and no more than 128 characters long. How long would you like your password to be?"); 

if (passwordLength > 8 && passwordLength < 128) {
  alert ("Your password will have " +  passwordLength + " characters.");

}else {
  alert ("Your password must be atleast 8 characters and no more than 128 characters long. Please try again.");
}

// PASSWORD NUMERIC OR ALPHANUMERIC -------------------------------------------------

var charType = prompt ("Should your passowrd be numeric or alphanumeric?");

if (charType === 'numeric') {
  alert ("Your password will have numeric characters.");

}else  {
  alert ("Your password will have alphanumeric characters.");
}


// PASSWORD CASING ------------------------------------------------------------------

var passwordCasing = prompt ("Do you want 'uppercase', 'lowercase' or 'both' types of characters in your password?");

if (passwordCasing === "uppercase") {
  alert ("Your password will have uppercase characters.");

} else if (passwordCasing === "both") {
  alert("Your password will have both uppercase and lowercase characters.")

} else {
  alert("Your password will have lowercase characters.");

} 

// PASSWORD SPECIAL CHARACTERS ----------------------------------------------------

var specChar = confirm("Do you want special characters in your password?")

if (specChar === true)  {
alert("Your password will have special characters.")

} else  {
  alert("Your Password will not have special characters.");
}

alert ("Click 'Generate Password' to see your password.");



// FUNCTION --------------------------------------------------------------------

function generatePassword() {
  var length = passwordLength,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      specChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      casing = passwordCasing,
      alpha = charType
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

