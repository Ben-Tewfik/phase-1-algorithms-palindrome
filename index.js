function isPalindrome(word) {
  let number = Math.floor(word.length / 2);
  for (let i = 0; i < number; i++) {
    if (word.at(i) !== word.at(word.length - i - 1)) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  functionisPalindrom(word):
  number is floor of word length divided by 2
   for i from 0 to number - 1 and keep adding 1 to i
     if the character at index i not equls the character at index word length -i -1 
        then return false
  return true

create a condition inside the loop to check if the first charcter not equls the last characters return false and contunue the iteration comparing each word with it match
from the other side 

outside the loop if the condition is not met in all the word return true; 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
