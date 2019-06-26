let rollDice = function(times) {
  let randomNumbers = [];
  for (let i = 1; i <= times; i++) {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    randomNumbers.push(randomNum);
  } let result = randomNumbers.join(', ');
  console.log(`Rolled ${times} dice: `, result);
};
const args = process.argv.slice(2);
rollDice(args)