
[Table of Contents](/README.md)

# Day 11

## Review
- positioning of "skateboarders" label for sk8er assignment - attach the label to the right container by making it a child of the skateboarders section. make it position absolute based on that position relative container.
- radio button styles (basically, just accept that you can't style them, and that you must use a substitute other element)
- how did you solve the calculator problem?
	- look through an element in the DOM until you find something useful (like 'onclick')

## Challenge
See assignment in TIYO

## Notes
- DOM accessors
	- `document.querySelector(cssSelector)`
		- uses a CSS selector to find a matching element on the page.
		- only ever returns 1 element, the first that matches, and STOPS
	- `document.getElementById(idName)`
		- doesn't require a `#` bc it already knows it wants an id
		- also only returns 1 element (first matching)
	- `document.getElementsByClassName(className)`
		- doesn't require a `.` bc it already knows it is looking for a class
		- it returns an array-like object of all the matching elements, in order they were found
	- `document.querySelectorAll(cssSelector)`
		- just like querySelector except we get back a array like object with all matching elements
- DOM events
	- emitted by DOM elements for all types of occurrences within the browser.
	- common types
		- click
		- dblclick (doubleclick)
		- mouseover
		- mouseleave
		- keydown (keyboard key pressed down)
		- keypress
		- keyup
	- listening for them
		- add an event listener to the element and its event.
		```js
		HTMLelement.addEventListener('eventName', function() {
			// write code here
		})
		```
- Scope
	- available range of something
	- where variable names are available for use
	- 2 options for scope - function scope and global scope.
		- global : top level of my js program, not inside another function; any variables or names/labels that exist in the global scope can be used in any child scopes
		- function : a var or label declared within a function is scoped to that function only, and any children of that function. NOT available in the global scoped
- conditional logic
	- if and else statements
		```js
		if (truth test goes here) {
			// code to run goes here
			// this code only runs if truth test passes
		} else if (another truth test) {
			// if the first truth test didn't pass, then this one will be checked.
			// if this one passes, this code will run.
		} else {
			// if none of the truth tests pass, this code will run
		}
		```

	- truthy/falsey
		- the code inside the () of the if statement is evaluated down and then coerced into a boolean.
			- if the boolean is true, the code block runs,
			- if it is false, the code block is ignored.
	- conditional operators
		- `||`, `&&`
			- or `||` checks for if ANY value in a list is truthy
				- returns with the FIRST truthy value it finds OR the last falsey value
			- and `&&` checks for if ALL values in a list are truthy
				- returns the FIRST falsey value it finds OR the last truthy value.
	- reading MDN docs
		- pretend like `.prototype` means "example of a "
		- in the syntax box:
			- italics means example of a _thingInItalics_;
			- anything inside `[]` is optional

## Resources
