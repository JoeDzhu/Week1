const countLetters = function(WordsToCount) {
  // turn the string into an array;
  const arrayToCount = WordsToCount.split('');
  // console.log(arrayToCount);
    // build an empty Object;
  const newArray = [];
  for (let i = 0; i < arrayToCount.length; i++) {
    if (arrayToCount[i] !== "," && arrayToCount[i] !== "." && arrayToCount[i] !== " ") {
      newArray.push(arrayToCount[i]);
    } 
  }
  // console.log(newArray);

  const letterCounts = {};
  //for each letter, two steps, give it a key, then add 1 to it if sees again;
  for (const letter of newArray) {
    // console.log(letter);
    if (letterCounts[letter]) {
      letterCounts[letter] += 1;
    } else {
      letterCounts[letter] = 1;
    }
  } 
  return letterCounts;
};

// console.log(countLetters("Hello, olleH."));
module.exports = countLetters;

