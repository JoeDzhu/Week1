const eqObjects = function(object1, object2) {

const keys1 = Object.keys(object1);
const keys2 = Object.keys(object2);

// console.log(keys1, keys2);

if (keys1.length !== keys2.length) {

  return false;

} else {

      for (const key in object1){
        // console.log(key);

        if(Array.isArray(object1[key] && Array.isArray(object2[key]))) {
          
          console.log(key);//are supposed to return the same key

          //see if object1[key] = object2[key]
        }
          else (object1[key] !== object2[key]){

          // console.log(object1[key], object2[key]);

          return false;
        }
      } return true;
    } 
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc);
console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
