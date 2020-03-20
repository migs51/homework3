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

  //conditional statment to ensure password is between 8 and 128 characters in length
    if (passwordLength < 8 || passwordLength> 128){
      alert("Password length MUST be between 8 and 128 characters!!!!!");
    }
    else{
  var lowercase = confirm("Press OK if you want lowercase letters in your password");
  var uppercase = confirm("Press OK if you want uppercase letters in your password");
  var numeric = confirm("Press OK if you want numbers in your password");
  var special = confirm("Press OK if you want special characters like '!$#' in your password?");
    }
    //conditional statement to ensure that at least 1 criteria is selected
    if (lowercase === false && uppercase === false && numeric === false && special === false){
      alert("You must select at least 1 criteria for your password!!!");
    }

  return {
    passwordLength :passwordLength,
    Lowercase: lowercase,
    UpperCase: uppercase,
    Numeric: numeric, 
    Special: special
  }


}

//function to randomize which character gets chosen in the above character arrays
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

   //Function to generate random password based on user criteria
   function generatePass(){

    var userSelection = passCriteria();
   
    var password =[]
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
   

   //convert password array into string
   var  passwordString = '';
   password.forEach(x => {
    passwordString += x;
   })

// write the password to the DOM
    var passText = document.querySelector("#password");
    passText.innerHTML = passwordString;


}


// Add event listener to generate button
// click event on button to inititaive generatePass function 
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePass);



