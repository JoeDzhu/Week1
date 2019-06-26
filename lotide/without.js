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
/*用flag来取得相应的数值；尽量从inner loop中break，当条件满足时；然后再outter loop中再次检查条件；
不满足的，执行相应的；检查A与B，A为外，B为内，如果B中先flip的flag，直接break；然后再到A中，执行操作；因为
A的每个值都要被B中的每个值检验；所以，先运行和解说inner loop，然后再到outter loop中检查condition；
*/
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let match = false;
    
    for (let j = 0; j < itemsToRemove.length; j++) {
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