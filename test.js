const repeat = require('.');
const { default: test } = require('ava');

test('simple tests for a repeated strings', (t) => {
    t.deepEqual(repeat('a', 5), 'aaaaa');
    t.deepEqual(repeat('cool', 10), 'cool'.repeat(10));
});

test('cache implementation', (t) => {
    t.deepEqual(repeat('test', 7), 'test'.repeat(7));
    t.deepEqual(repeat('test', 7), 'test'.repeat(7));
    t.deepEqual(repeat('test', 6), 'test'.repeat(6));
});

test('test errors', (t) => {
    t.throws(() => repeat(undefined, 10), {
        message: 'Expected `input` to be a `string`, received undefined'
    });
    t.throws(() => repeat(123, 10), {
        message: 'Expected `input` to be a `string`, received number'
    });
    t.notThrows(() => repeat('str', 3));
});
