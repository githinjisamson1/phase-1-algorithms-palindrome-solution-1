function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here

  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
  Add your pseudocode here

  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here

  we create a function reverseString that takes a word parameter
  reverse word parameter using a combination of split, reverse and join
  split converts word into an array
  reverse writes the array backwards
  join combines the reversed array 
  return reversed array
  we create isPalindrome function that takes a word parameter
  invoke reverseString passing in word parameter and 
  store result in a variable reverseWord
  compare word parameter with reversedWord
  return true if the comparison evaluates to true
  return false if the comparison evaluates to false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
