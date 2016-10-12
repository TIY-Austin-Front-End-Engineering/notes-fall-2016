`
[Table of Contents](/README.md)

# Day 13

## Review
- what kind of things you know how to do
	- basic html grouping and structuring
	- style with css
		- selecting elements on the page by element, class, psuedo-selector
		- use layout techniques to move elements into position
	- styling with sass
		- make sure we have a directory for our styles
		- in that directory install bourbon and neat `bourbon install` and `neat install`
		- in your main.scss import bourbon and neat `@import 'bourbon/bourbon';` and `@import 'neat/neat';`
	- use grid system (eg neat)
	- javascript
		- including js in a project
		- conditional logic for decision making
		- string manipulation
		- store information in variables
		- change values using the assignment operator
		- respond to user events with functions and event listeners
		- access elements in the DOM
		- manipulate DOM with the accessed element and assignment operator

## Challenge
Recreate the following:
<img src="likes.gif" width: "50%"/>

- three ways to increment:
	- `likes = likes + 1;`
	- `likes += 1;`
	- `likes++;`

[my solution](https://codepen.io/nicerhugs/pen/ORENVW?editors=1010)

## Notes
- more detail about js functions
	- code that does stuff
	- declaring or defining a function
		- need the function keyword
		- need curly braces surrounding the code block
		- create **parameters** aka local variable names inside the M&M's
		```js
		// function declaration
			function nameOfFunction(parameter) {
				//code that does stuff
			}
		// function expression
			var nameOfFunction = function() {
				// code that does stuff
			}
		```

	- calling or invoking a function:
		- need our function to have a name
		- use the m&m's to invoke it
		- use parameter values aka **arguments** aka local variable values inside the M&M's
		```js
		nameOfFunction('some value');
		```
	- functions that are called by the browser or another function (aka not us the developer) are called "**callback**" functions.
		- every time you use a callback function, ask yourself, "what is being passed to this function as an argument?"
		- you can look up what it is, ask me, or just try logging it out and figuring it out
		- give these things names (parameters) when you define your callback functions so you can use them.
  - parameters
		- the names of the things we pass into functions
  - return statements
		- functions not only do stuff, they also evaluate to a value.
		- that value is determined by the return statement
		- to use that value you must store the invocation of a function in a variable or use it directly.
		- everything else in the function is considered a side effect
- for loop
	- allows us to run code multiple times, without writing the code multiple times
	```js
	for (set up expression; condition to complete loop; after loop expression) {
		// what to do each go through the loop
	}
	```

- more about the types
	- method
		- a function that lives ON an object or type
		- ie it's a function that is also a property
		- identified bc they start with a `.` and end with `()`
  - string props/methods
		- `.indexOf()`
		- `.length` // just a property, not a function
		- `.substring()` - get a substring from the main string
		- `.split()` - take a string and turn it into an array
  - array props/methods
		- `.join()` - the opposite of a string's split
		- `.reverse()` - reverses an array (mutative)
		- `.push()` - adds a value or values to the end of the array (mutative)
		- `.concat()` - adds value or values to the end of an array (or adds 2 array together) without mutating
		- `.slice()` - gets a piece of an array without changing the original array
		- `.splice()` - get a piece of an array BY removing from the original array, also lets you add stuff in there in its place.
  - pass by value vs pass by reference
  - built in objects
    - document object
		- event object
		- html element objects
    - Math object
    - window object
      - declaring global variables
    - location

## Resources
`
