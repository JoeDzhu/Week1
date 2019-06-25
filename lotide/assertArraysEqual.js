const assertEqual = function(actual, expected) {
  return (actual === expected ?
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};

const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  } return true;
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

assertEqual(eqArrays([false], [false]), true);
assertEqual(eqArrays([1, 2, 3], [14, 44, 5]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);