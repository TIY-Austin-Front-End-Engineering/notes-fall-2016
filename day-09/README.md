
[Table of Contents](/README.md)

# Day 09

## Review
- how to get rid of unwanted and uncommitted changes in a git repo
	- use `git reset` (google and maybe ask for help the first time)
	- NEVER USE THE `-f` flag without checking with another human first

## Challenge
work in pairs and use the following HTML to create a dropdown menu. By default only "your list" should show, and when you hover over it, the entire list should show up.
```html
<ul>
  <li>your list</li>
  <li><a href="#">home</a></li>
  <li><a href="#">about</a></li>
  <li><a href="#">contact</a></li>
</ul>
```

## Notes
- javascript
	- programming language that is understood by our browsers
	- not java or related to java, it's just piggy backing on a popular name
	- ECMAscript is the technical name for it
- include js in our websites
	- script tag as the last tag before the closing body tag
	```html
	<script src="main.js"></script>
	```
- js types
	- primitive types cannot be broken down further and still be javascript
	- they have inherent meaning to our interpreter (javascript)
	- there are 5 primitive types in js:
		- boolean
			```js
			true
			false
			```
		- number
		```js
		123
		1.4
		-Infinity
		NaN
		```
		- string
		```js
		'any words, numbers, well, characters'
		'of any lenth'
		'123'
		'0kfds934'
		'' // this one is commonly referred to as an "empty string"
		```
		- undefined - default value for a variable, not yet a value of anything
		```js
		undefined
		```
		- null - explicitly nothing
		```js
		null
		```
- variables
	- labels or boxes for values (aka types)
	- created using the `var` keyword
	- use any letter characters, _ $ and numbers to create a variable name
	- can't start with a number
	- best practices:
		- start with lowercase letter
		- camelCase
	- variables evaluate to their value, and their values are A TYPE!
- js operators (grouped by the type they return)
	- assignment operator (can result in a varible of any type)
		- `=`
	- string operators
		- + (concatenation operator)
		- adds strings together
	- number operators
		- math ones :  `+` `-` `/` `*` `%`
			- `%` modulo, results in the integer remainder of a division problem
				- eg `5 % 2` results in 1
		- + is an "overloaded" operator, which means it can do more than one thing.
	- boolean operators
		- comparative operators : `>` `<` `>=` `<=` `===` `!==`
		- `||` - is ANYTHING in the list true?
			- or, the first true thing OR the last false thing
		- `&&` - is EVERYTHING in the list true?
		 	- and, the last true thing OR the first false thing
			- these ones are weird, bc they don't return a particular type
		- type coercion - coercing or making a type change types
			- we can coerce into ANY of the 3 basic primitive types (number, boolean, string)
			- `Number(something)` coerces `something` to a number
			- `Boolean(something)` coerces `something` to a boolean
			- `String(something)` coerces `something` to a string
			- falsy values (aka would coerce to a false boolean)
				- `''`, `0`, `NaN`, `undefined`, `null`
			- `==` tests for equality and coerces to do so
			- `===` "strict equals" does not coerce to test for equality
- non-primitive types
	- types that are more than just a single value
	- arrays and objects (the types that are made of other types)
		- storage for other types and values
		- arrays are ordered, and that order is specific and meaningful
			- see js file for syntax
			- the order starts at 0, and each element is numbered in turn.
			- access them by their number
				- `arrayName[0]`
		- objects are not ordered, they are key/value pairs, instead of a number, each item within them has a name.
			- `.` is called a "property accessor"
 	- and functions (the code that does stuff)
- DOM - document object model
	- our html document is represented in JS as a JS object.

## Resources
