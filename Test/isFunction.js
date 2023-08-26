$.writeln(isFunction(function () {})); // true
$.writeln(isFunction(123)); // false
$.writeln(isFunction("hello")); // false
$.writeln(isFunction({})); // false
$.writeln(isFunction(undefined)); // false
$.writeln(isFunction(null)); // false
$.writeln(isFunction(NaN)); // false
$.writeln(isFunction()); // false
