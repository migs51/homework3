//Array of special characters to be included in password
let specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ 'a','b', 'c','d', 'e', 'f', 'g','h','i', 'j','k', 'l', 'm', 'n','o','p','q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


//function to get user input
function passCriteria() {
  var passwordLength = prompt("choose the length of your password between 8 and 128 characters");
  var lowercase = confirm("Press OK if you want lowercase letters in your password");
  var uppercase = confirm("do you want uppcase letters in your password")
  var numeric = confirm("do you want numbers in your password")
  var special = confirm("do you want special characters like !$# in your password?")

  return {
    passwordLength :passwordLength,
    Lowercase: lowercase,
    UpperCase: uppercase,
    Numeric: numeric,
    Special: special
  }


}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


   //Function to generate random password based on user criteria
   function generatePass(){

    let userSelection = passCriteria();
   
    let password =[]
   for(i=1; i <= userSelection.passwordLength; i++){

    if(userSelection.Lowercase && password.length < userSelection.passwordLength ){
      password.push(getRandom(lowerCasedCharacters))
    }

    if(userSelection.UpperCase && password.length < userSelection.passwordLength){
      password.push(getRandom(upperCasedCharacters))
    }

    if(userSelection.Numeric && password.length < userSelection.passwordLength){
      password.push(getRandom(numericCharacters))
    }

    if(userSelection.Special && password.length < userSelection.passwordLength){
      password.push(getRandom(specialCharacters))
    }
   


   }
    
   let  passwordString = '';
   password.forEach(x => {
    passwordString += x;
   })


    var passText = document.querySelector("#password");
    passText.innerHTML = passwordString;


}

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePass);





//function that generates random characters
//function should generate random characters based on Object criteria



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password; 

}




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