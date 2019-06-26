const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  return (actual === expected ?
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (i = 0; i < source.length; i++) {
    let match = false;

    for (j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match = true;
        break;
      }
      }
      if (!match) {
        newArray.push(source[i]);
      }
    } return newArray;
};
console.log(without([1, 2, 3, 4, 5], [2, 1, 3, 4]));