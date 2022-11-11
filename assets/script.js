// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");
//   const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//   const symbols = "!@#$%^&*()";
//   const numbers = "1234567890";


// Write password to the #password input
// function writePassword() {
//    var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// function createPassword(length = 8) {
//   let password = '';
//   let chars = window.confirm ("would you like your password to have letters")
//   // const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//   // const symbols = "!@#$%^&*()";
//   // const numbers = "1234567890";
  
//   let passwordLength = length;

//   const array = new Uint32Array(length);
//   window.crypto.getRandomValues(array);

//   console.log(array);

//   for (i=0; i<length; i++) {
//     password += chars[array[i] % chars.length];
//   }
//   console.log(password);
//   return password;

// }


// createPassword(15)

const generateBtn = document.querySelector("#generate");


function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  let lower = "abcdefghijklmnopqrstuvwxyz"
  let lowerArr = lower.split("");
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperArr = upper.split("");
  let num = "0123456789";
  let numArr = num.split("");
  let spec = "!@#$%^&*()_+?<>";
  let specArr = spec.split("");
  let allChars = [];

 //allChars = allChars.concat(lowerArr);
  let password = "";

  let pwlength = prompt("Choose password length: 8-128 characters.");

  if (pwlength < 8 || pwlength > 128) {
    alert("Password must be between defined length.")
    generatePassword()
  }
  if (confirm("Do you want lowercase characters?")) {
    allChars.push(lowerArr);
  }
  if (confirm("Do you want uppercase characters?")) {
    allChars.push(upperArr);
  }
  if (confirm("Do you want numeric characters?")) {
    allChars.push(numArr);
  }
  if (confirm("Do you want special characters?")) {
    allChars.push(specArr);
  }
  if (allChars.length === 0) {
    alert("Minimum of one type of character must be chosen");
    generatePassword()
  }
  var length = 8,
   charset = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
   retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {   retVal += charset.charAt(Math.floor(Math.random() * n));
}
 return retVal;

  
  
 for (let i = 0; i < pwlength; ++i) {
   let random = Math.floor(Math.random() * Math.floor(allChars.length));
  password += allChars[random];
 }

 return password;
}

// "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

generateBtn.addEventListener("click", writePassword);

