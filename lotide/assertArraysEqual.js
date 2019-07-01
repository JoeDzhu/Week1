const eqArrays = require('./eqArrays');


const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } else{
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }; //in js you cannot go annomous for the else statement;
};

module.exports = assertArraysEqual;

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
