# ExtendScript-TypeTest
 Type tests extensions for ExtendScript

As ExtendScript is a version of ES3 implemented by Adobe, it is not fully compatible with ES3.
This version can be used with Adobe programs such as Illustrator, InDesign/InCopy, or Photoshop.

These functions fill in the missing built-in ExtendScript functions.

## The available functions are:

* isBoolean()     - Tests if a passed data is Boolean
* 	isNumber()      - Tests if a passed data is Number
*	 isString()      - Tests if a passed data is String
* isNull()      	- Tests if a passed data is `null`
* isNullish()   	- Tests if a passed data is `null` or `undefined`
* isFalsy()     	- Checks if a value is false, null, undefined, 0, NaN, or an empty string ("")
* isDefined()   	- Tests if a passed data is !undefined
* isFunction()  	- Tests if a passed data is Function
* isDate()      	- Tests if a passed data is Date
* sameValueZero() - Determines if two values are equal using the SameValueZero algorithm
*	 isPrimitive()  	- Check if the given value is a primitive data type or null/undefined
* isRegExp()    	- Tests if a passed data is RegExp
* isIterable()    - Checks if an object is iterable.
* isCallable()    - Determines if a given value is callable.