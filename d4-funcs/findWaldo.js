// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach(function(name, i) {
    if(name === "Waldo") {
      found(i);
    } 
  })
  // for (let i = 0; i < names.length; i++) {
  //   if (names[i] === "Waldo") {
  //     found(i);  // execute callback
  //   }
  // }
}

// const actionWhenFound = function(index) {
//   console.log("Found Waldo at index " + index + "!." );
// }

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index " + index + "!.");
}))