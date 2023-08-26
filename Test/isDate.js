// Test cases
$.writeln(isDate(new Date())); // true
$.writeln(new Date()); // Sat Aug 26 2023 19:47:26 GMT+0200 (for examle...)
$.writeln(isDate(new Date('2021-09-30'))); // true
$.writeln(isDate(new Date('invalid date'))); // false
$.writeln(new Date('invalid date')); // Invalid Date
$.writeln(isDate('2023-07-19')); // false
$.writeln(isDate(123456789)); // false
$.writeln(isDate(new Date(123456789))); // true
$.writeln(new Date(123456789).toUTCString()); // Friday, 02 Jan 1970 10:17:36 GMT
$.writeln(isDate(null)); // false
$.writeln(isDate(NaN)); // false
$.writeln(isDate({})); // false
