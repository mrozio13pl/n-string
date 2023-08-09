### Benchmarking: (7 of 7)
 - x2
 - x3
 - x10
 - x50
 - x250
 - x2000
 - x20000

# x2
  - n-string                    56,976,254 ops/sec
  - repeat-string               35,942,652 ops/sec
  - repeat-string-1.5.4         35,000,687 ops/sec
  - repeat-string-1.3.0         41,854,337 ops/sec
  - repeating                   31,501,047 ops/sec
  - native                      30,298,326 ops/sec

> fastest is __n-string__

# x3
  - n-string                    53,635,107 ops/sec
  - repeat-string               31,718,567 ops/sec
  - repeat-string-1.5.4         23,798,272 ops/sec
  - repeat-string-1.3.0         39,706,855 ops/sec
  - repeating                   24,657,834 ops/sec
  - native                      24,133,451 ops/sec

> fastest is __n-string__

# x10
  - n-string                    53,695,527 ops/sec
  - repeat-string               32,647,458 ops/sec
  - repeat-string-1.5.4         23,740,575 ops/sec
  - repeat-string-1.3.0         40,163,263 ops/sec
  - repeating                   19,278,921 ops/sec
  - native                      17,502,164 ops/sec

> fastest is __n-string__

# x50
  - n-string                    48,547,572 ops/sec
  - repeat-string               24,601,251 ops/sec
  - repeat-string-1.5.4         23,713,115 ops/sec
  - repeat-string-1.3.0         31,850,286 ops/sec
  - repeating                   12,974,803 ops/sec
  - native                      12,632,717 ops/sec

> fastest is __n-string__

# x250
  - n-string                    37,520,757 ops/sec
  - repeat-string               24,740,552 ops/sec
  - repeat-string-1.5.4         23,774,877 ops/sec
  - repeat-string-1.3.0         26,781,299 ops/sec
  - repeating                   10,145,315 ops/sec
  - native                      10,375,654 ops/sec

> fastest is __n-string__

# x2000
  - n-string                    34,830,610 ops/sec
  - repeat-string               24,961,801 ops/sec
  - repeat-string-1.5.4         23,587,511 ops/sec
  - repeat-string-1.3.0         29,622,597 ops/sec
  - repeating                   8,933,648 ops/sec
  - native                      9,579,231 ops/sec

> fastest is __n-string__

# x20000
  - n-string                    34,108,859 ops/sec
  - repeat-string               24,998,713 ops/sec
  - repeat-string-1.5.4         23,514,179 ops/sec
  - repeat-string-1.3.0         28,976,652 ops/sec
  - repeating                   7,617,948 ops/sec
  - native                      8,378,614 ops/sec

> fastest is __n-string__

# Acknowledgements

- [Benchmark](https://github.com/jonschlinkert/repeat-string)