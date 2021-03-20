// Assignment Code
var generateBtn = document.querySelector('#generate');
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caps = function(x) {return x.toUpperCase()};
var int = ['0','1','2','3','4','5','6','7','8','9']
var spec = ['!','@','#','$','%','&','*','?'];
// var options = [confirmInt, confirmChar, confirmCaps, confirmAlpha];
var options = [alpha, caps, int, spec];

var characters = '';
var passwordArray = Array(length);

var confirmInt;
var confirmChar;
var confirmCaps;
var confirmAlpha;

alpha2 = alpha.map(caps);

generateBtn.addEventListener('click', writePassword); 
// Write password to the #password input
function writePassword() {
//   event.preventDefault();
    var passwordContainer = [];
    var finalPassword = '';
    var length = 0;
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    // Assignment Code
    function generatePassword(){
        var charSelect = prompt ('How many characters would you like?');
        
        if(!charSelect) {
            alert('This needs a value');
        } else if (charSelect < 8 || charSelect > 128){
            charSelect = alert('You must choose between 8 and 128');
            return;
        } else {
            confirmInt = confirm('Will this contain numbers?');
            confirmChar = confirm('Will this contain special characters?');
            confirmCaps = confirm('Will this contain Uppercase letters?');
            confirmAlpha = confirm('Will this contain Lowercase letters?');
        } 
        
    if (confirmInt) {
        passwordContainer = passwordContainer.concat(int);
    }

    if (confirmChar) {
        passwordContainer = passwordContainer.concat(spec);
    }
    
    if (confirmCaps) {
        passwordContainer = passwordContainer.concat(alpha2);
    }

    if (confirmAlpha) {
        passwordContainer = passwordContainer.concat(alpha);
    }

    // document.getElementById("password").value = passwordText;

   

    if (!confirmInt, !confirmChar, !confirmCaps, !confirmAlpha) {
        alert("Your password must contain at least one special, numeric, lowercase, or uppercase character.");
        return generatePassword();
    } else randomizePassword();

    function randomizePassword() {
        for(var i = 0; i < charSelect; i++) {
        var randomIdx = Math.floor(Math.random() * passwordContainer.length);
        var randomChar = passwordContainer[randomIdx];
        finalPassword = randomChar + finalPassword;
        }  
    }}
    
    console.log(finalPassword);
     

    
       // if (confirmInt, confirmChar, confirmCaps, confirmAlpha) {  
     //     var randomArray = character.concat(alpha2, int, spec, alpha);
    // }
    // 
    // }
    // console.log(randomize);    
    
        
}

// Add event listener to generate button
   







// console.log(answer);
    // answer = parseInt (prompt ('How many characters would you like?'));
    
    // if(!answer) {
    //     confirmInt = confirm('Will this contain numbers?');
    //     confirmChar = confirm('Will this contain special characters?');
    //     confirmCaps = confirm('Will this contain Uppercase letters?');
    //     confirmAlpha = confirm('Will this contain Lowercase letters?');
    // }

    // function generatePassword(length) {
    //     var alpha = 'abcdefghijklmnopqrstuvwxyz';
    //     var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     var int = '0123456789';
    //     var spec = '!@#$%&*?';
    //     var options = [alpha, caps, int, spec];
    //     var password = '';
    //     var passwordArray = Array(length);

    //     for(i = 0; i < length; i++) {
    //     }
    // }
