// Assignment code here
function generatePassword(){
  var password ="";
  for (let i=0; i<10; i++){
    password += getPasswordLetter();
  }
  return password;                         
}

function getPasswordLetter(){
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
                           "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
                           "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7",
                           "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H",
                           "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                           "T", "U", "V", "W", "X", "Y", "Z", "%", "&", "@", "!", "?"];
  var rand =Math.floor(Math.random() * letters.length);
  var randomLetter = letters[rand];
  return randomLetter;                        
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

