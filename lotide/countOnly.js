const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //item = 'el 5'
    //itemsToCount.item 
    // { 'item': 123 }
    //itemsToCount['el 5']
    // { 'hello': 123 }
    if(itemsToCount.item) {
      if(results[item]) { //this line returns empty object if find the item in itemsToCount.
                          //which is false then jump to the else part and assign a value to
                          // the first item in results.
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } return results;
}; 

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

module.exports = countOnly;

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
// // console.log(result1);


// const assertEqual = function(actual, expected) {
//   return (actual === expected ?
//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//   : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
// };
