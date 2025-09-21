const assert = require('assert');
const { greet } = require('../src/index');

assert.strictEqual(greet('Alice'), 'Hello, Alice!');
console.log('All tests passed');
