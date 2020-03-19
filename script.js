// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


//function to get user input
// function passCriteria() {
//   var passwordLength = prompt("choose the length of your password between 8 and 128 characters");
//   var lowercase = confirm("Press OK if you want lowercase letters in your password");
//   var uppercase = confirm("do you want uppcase letters in your password")
//   var numeric = confirm("do you want numbers in your password")
//   var special = confirm("do you want special characters like !$# in your password?")

//   console.log(passwordLength);
//   console.log(lowercase);
//   console.log(uppercase);
//   console.log(numeric);
//   console.log(special);

// }

//store user input into Object

var userInput = {
  passwordLength: prompt("choose the length of your password between 8 and 128 characters"),
  lowercase: confirm("Press OK if you want lowercase letters in your password"),
  uppercase: confirm("do you want uppcase letters in your password"),
  numeric: confirm("do you want numbers in your password"),
  special: confirm("do you want special characters like !$# in your password?")
}

// function logInput(){
//   console.log(passwordLength);
//   console.log(lowercase);
//   console.log(uppercase);
//   console.log(numeric);
//   console.log(special);
// }
//function that generates random characters
//function should generate random characters based on Object criteria



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password; 

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", passCriteria);



//click button
//prompt user how long they want their password to be (between 8 and 128 characters)
//prompt user if they want lowercase letters
//prompt user if they want uppercase letters
//prompt user if they want numeric characters
//prompt user if they want special characters
//validate that the user chose at least 1 character type - if not.. 
//alert user and start question prompts over
//generate password that matches selected criteria
//display generated password on the screen