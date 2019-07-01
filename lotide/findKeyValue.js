const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const showCat = Object.keys(bestTVShowsByGenre);
// console.log(showCat);

// I think the key to turn an object to an array as you cannot iterate an object.

const findKeyByValue = function (allShows, nameOfShows){
  for (i = 0; i < showCat.length; i++){
    if (bestTVShowsByGenre[showCat[i]] === nameOfShows) {
      return showCat[i];
    }
  }
}


module.exports = findKeyByValue;
// const assertEqual = function(actual, expected) {
//   return (actual === expected ?
//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//   : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`));
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);