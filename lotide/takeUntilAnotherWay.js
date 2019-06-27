const takeUntil = function(arr, callback) {

let result;
arr.forEach(function(item, index){
  if(callback(item)) {
    result = arr.slice(0, index);
    // return result;
  }
  // return result;
});
  return result; 
// if use methods, need to see }); then return; (if put return another line
// it works but style is still an issue)

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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
expecedArr1 = [ 1, 2, 5, 7, 2 ];
expecedArr2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(eqArrays(expecedArr1,results1),true);
assertArraysEqual(eqArrays(expecedArr2,results2),true);