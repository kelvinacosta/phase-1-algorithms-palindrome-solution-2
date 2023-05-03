function isPalindrome(word) {
  // Write your algorithm here
  //Cretae a for loop to iterate the string
  for(let i =0; i<word.length/2; i++){
    //create a variable to got in reverse.
    const j = word.length - 1 -i
    //create a condition to check if isPalindrome
    if(word[i]!== word[j])
      return false
    
  }
  return true
}

/* 
  Add your pseudocode here
  iterate the string from one point the half. 
  Then compare if word isPalindrome return true 
  otherwise return false
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
