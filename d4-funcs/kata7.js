const camelCase = function(input) {
  let camel = input.replace(/\W+()/g, function(found, cha) {  //regExp is so much, need more time to understand it more.
    return cha.toUpperCase(found);
  });
  return camel;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));