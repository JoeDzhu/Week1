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

/*to call the function of eqArrays to assertEqual, try this:
store the eqArrays's output into a var - result:
let A1 = [];
let A2 = [];
let result = eqArrays(A1, A2);
the give result to assertEqual(result, true);
now go backwards:
replace result with what it is:eqArrays([], []);
done.
*/

assertArrayEqual(eqArrays([false], [false]), true);
assertArrayEqual(eqArrays([1, 2, 3], [14, 44, 5]), false);
assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);