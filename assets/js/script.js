// Assignment Code
var generateBtn = document.querySelector('#generate');
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caps = function(x) {return x.toUpperCase()};
var int = ['0','1','2','3','4','5','6','7','8','9']
var spec = ['!','@','#','$','%','&','*','?'];
var options = [alpha, caps, int, spec];
var password = '';
var passwordArray = Array(length);

alpha2 = alpha.map(caps);
// Write password to the #password input
function writePassword() {
//   event.preventDefault();
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
        } else {
            confirmInt = confirm('Will this contain numbers?');
            confirmChar = confirm('Will this contain special characters?');
            confirmCaps = confirm('Will this contain Uppercase letters?');
            confirmAlpha = confirm('Will this contain Lowercase letters?');
        };

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);    







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
