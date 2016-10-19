
[Table of Contents](/README.md)

# Day 18

## Review
- clearing a text input after some event
	- see example in review folder
- the delete button
	- if you want it to work, you have to register a listener to it. that means, EVERY TIME YOU MAKE ONE!, if you make a button in 2 different places, you have to be sure to add the listener in both places.

## Challenge
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

```js
//example function calls and their expected outputs:
isIsogram( 'Dermatoglyphics' ) == true
isIsogram( 'aba' ) == false
isIsogram( 'moOse' ) == false // -- ignore letter case
```

## Notes
- Constructors!
	- functions that build objects.
		- as opposed to creating object literals
	- any function ever could be a constructor.
		- this is bad!
		- as a community we have created guidelines to follow for using Constructors
			- their name starts with a capital letter
			- use `'use strict';`	within the constructor
			- create an instance using the `new` keyword and invoking the function with ();
			- we should return `this` so that the object creation part of the constructor is EXPLICIT
	- an object made with a constructor is an **instance** of that constructor
	- `this` inside a constructor refers to the instance of the constructor that you are creating when you instantiate it.
- this
	- `this` refers to the function context
	- if you're inside a function, it will tell you the context from which the function was called
	- if you're not inside a function it will always be the global scope

## Resources
