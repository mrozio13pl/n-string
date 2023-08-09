'use strict';

// uses cache if given string was previously repeated
var cache;
var _n;
var res = '';

module.exports = function (str, n) {
    if (typeof str !== 'string') {
        throw new TypeError(`Expected \`input\` to be a \`string\`, received ${typeof str}`);
    }

    if (cache !== str || _n !== n) {
        cache = str;
        res = '';
        _n = n;
    } else {
        return res;
    }

    while (n > 0) {
        if (n & 1) res += str;
        n >>= 1;
        str += str;
    }

    return res;
};