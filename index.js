function isPalindrome(word) {
  // Write your algorithm here
  //isPalidrome needs to take a string and determine if the string is the same forward and backwards if it is then it returns true and if it isn't then it returns false 
let wordBackwards = "";
for(let i=word.length-1; i>=0; i--) {
  wordBackwards = wordBackwards + word.charAt(i);
}
if (word === wordBackwards){
  return true
}else {
  return false
}
}

/* 
  function isPalindrome receives one word string. 
  create a new varible wordBackwards that is assigned the string backwards.
  to get the wordBackwards iterate through each letter and adding it to word using charAt.
  if word is equal to wordBackward then return true
  Else return false
*/

/*
  I had the function take the string and reverse it before then looking to see if the original word matches the new word. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("exepecting: false");
  console.log("=>", isPalindrome("rachel"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
