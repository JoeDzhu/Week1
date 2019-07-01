const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){

  const result = [];

  for (let item of array) {

    result.push(callback(item));

  }

  return result;

}

module.exports = map;

// console.log(map(words, word => word[0]))
// eqArrays(expecedArr,results1);
// if run the eqArrays here, it will return something but won't be
// visible as it is not stored anywhere. Unless put it in an variable.