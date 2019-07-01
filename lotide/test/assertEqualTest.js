const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('return 1 for 1', () => {
    assert.strictEqual(assertEqual(1, 1));
  });

  it('return false for false', () => {
    assert.strictEqual(assertEqual(false, false));
  });

  it('return 22 for 22', () => {
    assert.strictEqual(assertEqual(22, 22));
  });

  it('return Time for Time', () => {
    assert.strictEqual(assertEqual('Time', 'Time'));
  });

})