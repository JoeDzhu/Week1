const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it('return [1, 2, 4] for [1, 2, 3]', () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]))
  });

  it('return [] for []', () => {
    assert.deepEqual(assertArraysEqual([], []))
  });

  it('return [14, 44, 5] for [14, 44, 5]', () => {
    assert.deepEqual(assertArraysEqual([14, 44, 5], [14, 44, 5]))
  });
})
