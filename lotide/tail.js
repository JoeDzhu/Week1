const tail = function(tailArr) {
  if(tailArr.length >= 1) {
    return tailArr.slice(1);
  }
  return [];
};


module.exports = tail;

