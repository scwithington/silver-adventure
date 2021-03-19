// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
//   event.preventDefault();
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    createPassword;

}

function generatePassword(length) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var int = '0123456789';
    var spec = '!@#$%&*?';
    var options = [alpha, caps, int, spec];
    var password = '';
    var passwordArray = Array(length);

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);