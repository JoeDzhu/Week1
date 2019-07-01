const tail = require('../tail');

const assert = require('chai').assert;

describe('#tail', () =>{
  it('return [] for [] ', () => {
    assert.deepEqual(tail([]), []);
  });
  it('return [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5])
  });
});