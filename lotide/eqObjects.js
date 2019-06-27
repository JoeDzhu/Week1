const eqObjects = function(object1, object2) {

const keys1 = Object.keys(object1);
const keys2 = Object.keys(object2);

if (keys1.length !== keys2.length) {
  
  return false;

} else {
  for (const i in object1) {
    
    // console.log(i);

    if (object1[i] !== object2[i]) {
      
      return false;

    }
  }
}
};




const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc);
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

const assertEqual = function(actual, expected) {
  return (actual === expected ?
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};