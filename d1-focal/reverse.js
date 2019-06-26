const reverse = function(arg) {
  for (let i = 0; i < arg.length; i++) {
    let reversed = '';
    for (let j = arg[i].length - 1; j >= 0; j--) {
      reversed += arg[i][j];
    } console.log(reversed);
  }
};

const args = process.argv;
args.splice(0, 2);
reverse(args);