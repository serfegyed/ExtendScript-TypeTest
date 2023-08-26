// Test cases
$.writeln(sameValueZero(5, 5)); // true
$.writeln(sameValueZero(0, -0)); // true
$.writeln(sameValueZero(NaN, NaN)); // true
$.writeln(sameValueZero("abc", "abc")); // true
$.writeln(sameValueZero(null, undefined)); // false
$.writeln(sameValueZero(0, false)); // false
$.writeln(sameValueZero(123, "123")); // false
