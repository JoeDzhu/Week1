const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray = [];
  } else if (array.length % 2 === 1) {
    middleArray.push((array[Math.floor(array.length / 2 + 1) - 1]));
    return middleArray;
/* return array.push witll give the length of the new array;*/
  } else {
    middleArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  } return middleArray;
};

module.exports = middle;
