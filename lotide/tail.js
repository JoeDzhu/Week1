const assertEqual = function(actual, expected) {
  return (actual === expected ?
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
};
const head = function(headArr) {
  return (headArr === [] ? undefined : headArr[0]);
};
const tail = function(tailArr) {
  return (tailArr === [] ? undefined : tailArr.slice[1]);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));