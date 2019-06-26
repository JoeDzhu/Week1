// it is working but I don't know why it is working! By the way, break is for loops not conditionals.
let flatten = function(input) {
  let newArray = [];
  for (i = 0; i < input.length; i++) {
    
    if (!Array.isArray(input[i])) {
      newArray.push(input[i]);

    } if (Array.isArray(input)) {
      for (j = 0; j < input[i].length; j++) {
        newArray.push(input[i][j]);
      }
    }
  } return newArray;
}; console.log(flatten([1, 2, [3, 4], 5, [6]]));