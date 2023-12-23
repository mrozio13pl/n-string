/**
Repeat `string` n-times.

Example:
```
const repeat = require('n-string');

repeat('A', 5); // <= 'AAAAA'
```

@param str A string to repeat.
@param num Number of repetitions of a string.
@returns {String} Repeated string.
*/
declare function repeat(str: string, num: number): string;

export = repeat;