
[Table of Contents](/README.md)

# Day 14

## Review
- accessing objects within an array (see examples in js file)
- tabs - location hash
- split/reverse (array methods) (see examples in js file)
- caching dom elements

## Challenge
Write a function called sum that will return the sum of ANY NUMBER of arguments. eg:

```js
sum(1, 2, 5) // evaluates to 8
sum(4, 2) // evaluates to 6
sum(9, 34, 25, 1, -3) //evaluates to 66
```

HINT: you will need the special arguments keyword

## Notes
- variadic functions - a variable number of arguments are passed into a function, and you don't define each one specifically
- Array methods - looping array methods, do something for each element in an array
	- .forEach() - doesn't give anything back at the end, it's just side effects
		- do something for each item in the array
			- if we want to put something in the DOM for each element in an array
			- if we want to log something out
			- takes a callback function as its argument
			- the callback gets 3 parameters, the current item, the index of that item, and the array itself
			- we will run code for the callback once for each item in the array
			- never returns anything
	- .filter()
		- returns a new array
		- the new array with have the same items in it as the original array
		- it will just have FEWER of them
		- the callback receives the same arguments as the forEach
		- it should return a truthy or falsey value
		 	- truthy values mean that item ends up in the new array
			- falsey values mean that item is omitted from the new array
	- .map()
		- returns a new array
		- the new array is exactly the same length as the original array
		- the values in the new array could be ANYTHING but they correlate with the original array
		- the return value of the callback is the value put into the new array
	- .reduce()
		- returns a single type of our choosing (string, number, array, object)
		- we build it over time, incrementally
		- the reduce method takes 2 arguments (a callback and an initial value)
		- the callback receives 4 arguments (as opposed to 3 like the others) - return value so far, the current item, index, and array)
		- each iteration, the return value is passed in as the first argument.
		- on the FIRST iteration, the initial value is passed in as the first argument
		- on the LAST iteration, the return value is the return value of the entire reduce call.
- jQuery
	- javascript library used for DOM manipulation, event handling, and ajax requests
	- include it in our project with CDN and a script tag
	- see js file for examples of use




## Resources
