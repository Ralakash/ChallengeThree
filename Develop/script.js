// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function  generatePassword(){

  
  // Creates a log to receive and check the length of a password between 8 and 128 characters long.
  var pwordLength;
  function passwordLength(){
  pwordLength = window.prompt("How long is your password?");
  pwordLength = pwordLength;
    if(isNaN(pwordLength)){
      window.alert("You must input a number.");
      passwordLength();
  } else {
      if((pwordLength < 8)||(pwordLength > 128)){
        pwordLength = window.alert("Your password must be between 8 and 128 characters long. Please try again.");
        passwordLength();
      }
  }}
  passwordLength();

// creates an options function that calls seperate functions to ask and confirm if the user wants to use specific character sets in their password.
  var options = [true,true,true,true];
  function optionsFunc(){
    // *ADD VALADATION STATEMENT ON THESE*
    function lowercase(){
      options[0] = window.confirm("Include Lowercase characters?");
      if(options[0]==true){
      var confirmation = window.confirm("You selected to add Lowercase Characters to your password. Is this correct?");
      if(confirmation!=true){
        lowercase();
      }
      } else {
        var confirmation = window.confirm("You selected  not to add Lowercase Characters to your password. Is this correct?");
        if(confirmation!=true){
          lowercase();
        }
      }
    } 
    lowercase();
    function uppercase(){
      options[1] = window.confirm("Include Uppercase characters?");
      if(options[1]==true){
      var confirmation = window.confirm("You selected to add Uppercase Characters to your password. Is this correct?");
      if(confirmation!=true){
        uppercase();
      }
      } else {
        var confirmation = window.confirm("You selected  not to add Uppercase Characters to your password. Is this correct?");
        if(confirmation!=true){
          uppercase();
        }
      }
    }
    uppercase();
    function numeric(){
      options[2] = window.confirm("Include Numeric characters?");
      if(options[2]==true){
      var confirmation = window.confirm("You selected to add Numeric Characters to your password. Is this correct?");
      if(confirmation!=true){
        numeric();
      }
      } else {
        var confirmation = window.confirm("You selected  not to add Numeric Characters to your password. Is this correct?");
        if(confirmation!=true){
          numeric();
        }
      }
    }
    numeric();
    function special(){
      options[3] = window.confirm("Include Special characters?");
      if(options[3]==true){
      var confirmation = window.confirm("You selected to add Special Characters to your password. Is this correct?");
      if(confirmation!=true){
        special();
      }
      } else {
        var confirmation = window.confirm("You selected  not to add Special Characters to your password. Is this correct?");
        if(confirmation!=true){
          special();
        }
      }
    }
    special();
  }
  optionsFunc();
  if(options.join(",") == [false,false,false,false].join(",")){
    window.alert("You must select yes on at least one option.");
    optionsFunc();
  }

// Sets arrays for Capital Letters, Lowercase Letters, Special Characters, and Numbers. Creates a nested array to call the functions later.
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var capitalLetters = letters.split("");
  var lowercaseLetters = letters.toLowerCase().split("");
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
  var numbers = "123456789".split("");
  var optionsArray = [lowercaseLetters, capitalLetters,numbers,specialCharacters];
  
  //  Creates an array of characters to choose from when generating the password.
  var characters = [];
 for(var i =0; i < 4; i++){
  if(options[i] == true){
    characters = characters.concat(optionsArray[i]);
  }
 }

// Generates a random password with the selected character sets and runs it for a number of times equal to the option set by the user.
var pwordArray = [];
for(var i = 0; i<pwordLength; i++){
  var randomCharacter = characters[Math.floor(Math.random()*characters.length)];
  pwordArray.push(randomCharacter);
}
  return pwordArray.join("");
}
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
