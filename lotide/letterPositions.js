const letterPositions = function(sentence) {
  const results = {};
  //split the string and removing space;
  const letters = sentence.split(' ').join('').split('');
  // console.log(letters);

  for (const i of letters) {
    results[i] = [];
  }
  // console.log(results);

  for (let j = 0; j < letters.length; j++){
    if (results[letters[j]]){
      // console.log(j);
      // console.log(letters[j]);
      results[letters[j]].push(j);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"))