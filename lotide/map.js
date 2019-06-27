const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){

  const result = [];

  for (let item of array) {

    result.push(callback(item));

  }

  return result;

}

const results1 = map(words, word => word[0]);

const expecedArr = [ 'g', 'c', 't', 'm', 't' ];

const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false };
  } return true;
};

// eqArrays(expecedArr,results1);
// if run the eqArrays here, it will return something but won't be
// visible as it is not stored anywhere. Unless put it in an variable.

const assertArraysEqual = function(actual, expected) {
  return (actual === expected ?
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};

assertArraysEqual(eqArrays(expecedArr,results1),true);
// assertArraysEqual(eqArrays(''),true);
// this one works, because only passing one arg - empty string/falsy
// to the eqArrays, arr2 is undefined, so will return true;
// then actual is true, and expected is also true;

// console.log(assertArraysEqual());
// this also works,as not passing any to assertArraysEqual, then both are
// undefined, then both are falsy then pass.