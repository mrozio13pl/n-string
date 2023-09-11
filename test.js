const { test } = require('uvu');
const { is, throws, not } = require('uvu/assert');

const repeat = require('.');

test('simple tests for a repeated strings', () => {
    is(repeat('a', 5), 'aaaaa');
    is(repeat('cool', 10), 'cool'.repeat(10));
});

test('cache implementation', () => {
    is(repeat('test', 7), 'test'.repeat(7));
    is(repeat('test', 7), 'test'.repeat(7));
    is(repeat('test', 6), 'test'.repeat(6));
});

test('test errors', () => {
    throws(() => repeat(undefined, 10), {
        message: 'Expected `input` to be a `string`, received undefined'
    });
    throws(() => repeat(123, 10), {
        message: 'Expected `input` to be a `string`, received number'
    });
    not.throws(() => repeat('str', 3));
});

test.run();