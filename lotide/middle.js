/*const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  } return true;
};

const assertArrayEqual = function(actual, expected) {
  return (actual === expected ?
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};*/

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray = [];
  } else if (array.length % 2 === 1) {
    middleArray.push((array[Math.floor(array.length / 2 + 1) - 1]));
    return middleArray;
/* return array.push witll give the length of the new array;*/
  } else {
    middleArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  } return middleArray;
};

/*
console.log(middle([1, 2, 4, 5]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
