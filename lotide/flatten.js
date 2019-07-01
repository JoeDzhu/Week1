// Break is for loops not conditionals. Don't really know why it is working.
let flatten = function(input) {
  let newArray = [];
  for (i = 0; i < input.length; i++) {
    
    if (!Array.isArray(input[i])) {
      newArray.push(input[i]);
      //console.log(i);

    } if (Array.isArray(input)) {
      for (j = 0; j < input[i].length; j++) {
        newArray.push(input[i][j]);
      }
    }
  } return newArray;
}; 

module.exports = flatten;
// console.log(flatten([1, 2, [3, 4], 5, [6]]));