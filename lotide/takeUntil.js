const takeUntil = function(arr, callback) {

  const results = [];

  for(i = 0; i < arr.length; i++){
    if(callback(arr[i]) === false){
      results.push(arr[i])
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// console.log(results1);