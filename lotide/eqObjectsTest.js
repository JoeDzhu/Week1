a = {a : 1, b : 2, c : 4};
b = {b : 3, c : 3, d : 4};

const comp = function(o1, o2){
  for (const i in o1) {
    // console.log(i);
    if(o1[i] && o2[i]) {
          
      console.log(i);
    }
  }
}

console.log(comp(a, b));