const findKey = function(obj, callback) {

  const results = [];
  for (const i in obj) {
    // console.log(i);
    if (callback(obj[i])){
      results.push(i);
      // return results;
    } // return results;
  } 
  return results;
};

object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const results1 = findKey(object1, x => x.stars === 2);

const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false };
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  return (actual === expected ?
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};
expecedArr = [ 'noma', 'Ora' ];

assertArraysEqual(eqArrays(expecedArr,results1),true);


