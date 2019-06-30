const eqObjects = function (ob1, ob2) { //has certain bugs to fix. Maybe later.
  if (ob1 === ob2) {
    return true;

  } else {

    if (Object.keys(ob1).length !== Object.keys(ob2).length) {
      return false;

    } else {

      for(let i in ob1) {

        if(Array.isArray(ob1) && Array.isArray(ob2)) {

          if (ob2.prototype.hasOwnProperty(i)) {

            for (let j = 0; j < ob1[i].length; j++) {
              if (ob1[i][j] !== ob2[i][j]) {
                console.log(ob2[i][j]);
                return false;
              } 
              return true;
            }
          } 
        }
        // return false;
      }
    }
  }
};

  const cd = { c: "1", d: ["2", 5] };
  const dc = { d: ["2", 3], c: "1" };

  eqObjects(cd, dc);
  console.log(eqObjects(cd, dc)); // => true
