// Do it the old way.

const takeUntil = function(array, callback) {
  // console.log(array);

  const results = [];
  for (i = 0; i < array.length; i++) {
    if( array[i] > 0) {
      results.push(array[i])
      // console.log(array[i], results);
    } else {
      break;
    }
  }
  // array.filter(callback)
  // console.log(callback);
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);