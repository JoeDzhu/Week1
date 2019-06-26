let obfuscate = function(text) {
  let input = text[0].split('');
  //console.log('input ', input);
  let result = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
      result += '4';
    } if (input[i] === 'e') {
      result += '3';
    } if (input[i] === 'o') {
      result += '0';
    } if (input[i] === 'l') {
      result += '1';
    } else {
      result += input[i];
    }
  } console.log(result);
};

const args = process.argv.slice(2);
obfuscate(args);


