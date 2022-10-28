// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("OnClick", writePassword);

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = ["1","2","3","4","5","6","7","8","9","0"];
var spec = ["!","@","#","$","%","^","&","*","(",")"]
var result = '';

// Added Functions to create parameters for password setup

function generatePassword() {
    var uppercase = window.confirm("Include Uppercase Letters?");
    var lowercase = window.confirm("Include Lowercase Letters?");
    var numeric = window.confirm("Include Numbers?");
    var special = window.confirm("Include Special Characters?");
    var length = prompt("Enter the Number of Characters Desired. Must be Between 8-128");
    var blank = [];

    if (length<8){
        alert("Password Must Contain At Least 8 Characters")
        return 
    }
    else if (length>128){
        alert("Password Can Not be Longer Than 128")
        return
    }
    if (uppercase){
        blank = blank.concat(upper);
    } 
    if (lowercase){
        blank = blank.concat(lower);
    } 
    if (numeric){
        blank = blank.concat(num);
    } 
    if (special){
        blank = blank.concat(spec);
    } 
    if (blank.length<1) {
        alert("No Characters to Choose From!")
        return
    } 
    function Create(){
        var result = [];
        function number(max){
            return Math.floor(Math.random()*max)
        }
        for (var i=0; i<length; i++){
            result = result.concat(blank[number(blank.length)])
        }
        return final = result.join("");
    }
    console.log(blank)
    console.log()
    return Create();

}