// Assignment Code
var generateBtn = document.querySelector('#generate');

// Array variables
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caps = function(x) {return x.toUpperCase()};
var int = ['0','1','2','3','4','5','6','7','8','9']
var spec = ['!','@','#','$','%','&','*','?'];

// Confirmation variables to be used in concatenation
var confirmInt;
var confirmChar;
var confirmCaps;
var confirmAlpha;

// variable to call for alpha toUpper
alpha2 = alpha.map(caps);

generateBtn.addEventListener('click', writePassword); 
// Write password to the #password input
function writePassword() {
    // local variables for password parameters.
    var passwordContainer = [];
    var finalPassword = '';
    var charSelect = 0;
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    // Generate password function to be run once button is pushed
    function generatePassword(){
        charSelect = prompt ('How many characters would you like?');
        // user prompted to state how many characters they would like in their password
        // if statement assures 8 < length < 128
        if(!charSelect) {
            alert('This needs a value');
        } else if (charSelect < 8 || charSelect > 128){
            charSelect = alert('You must choose between 8 and 128');
            return;
        } else {
            // confirmation of symbol types
            confirmInt = confirm('Will this contain numbers?');
            confirmChar = confirm('Will this contain special characters?');
            confirmCaps = confirm('Will this contain Uppercase letters?');
            confirmAlpha = confirm('Will this contain Lowercase letters?');
        } 
    
    // if statements to concatenate array variables
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

    // if statement preventing lack of selection
    if (!confirmInt, !confirmChar, !confirmCaps, !confirmAlpha) {
        alert("Your password must contain at least one special, numeric, lowercase, or uppercase character.");
        return generatePassword();
    } else {
        randomizePassword();
    }
    /* for loop turning array into a string with proper length and setting 
    finalPassword equal to the randomized selection*/
    function randomizePassword() {
        for(var i = 0; i < charSelect; i++) {
        var randomIdx = Math.floor(Math.random() * passwordContainer.length);
        var randomChar = passwordContainer[randomIdx];
        finalPassword = randomChar + finalPassword;
        }  
    }
}

    // logs randomized password in console
    console.log(finalPassword);
    // Pushes randomized password to appear on webpage
    passwordText.value = finalPassword;    
}
