const middle = require('../middle');

const assert = require('chai').assert;

describe("#middle", () => {
  it("return [2, 4] for [1, 2, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 4, 5]), [2, 4])
  });

  it("return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [])
  });

  it("return [1, 2, 3] for [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
})

// assertArraysEqual(middle([1, 2, 4, 5]), [2, 4]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);