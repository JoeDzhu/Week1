const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  // console.log(keys1, keys2);
  
  if (keys1.length !== keys2.length) {
  
    return false;
  
  } else {
    for (let key in object1) {

      if (typeof(object1[key]) !== typeof(object2[key])) {
        return false;

      } else {
        
        for (let key in object1) {
          if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

            if (object1[key].length !== object2[key].length) {
              return false;

            } else {

              for (i = 0; i < object1[key].length; i++) {

                if (object1[key][i] !== object2[key][i]) {
                  return false;
                }
              } return true;
            }
          }
        }
      }
    }
  }
};
  
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };

  // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('until').inspect;

};

  eqObjects(cd, dc);
  console.log(eqObjects(cd, dc)); // => true