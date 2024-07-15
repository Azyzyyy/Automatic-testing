import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.deepEqual(capitalize('my new car'), 'My new car')

assert.deepEqual(capitalize(''), '')

console.log('Все тесты пройдены');