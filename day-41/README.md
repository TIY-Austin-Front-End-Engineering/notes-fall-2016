
[Table of Contents](/README.md)

# Day 41

## Review
- backbone parse
	- exists on models and collections
	- for fetch requests that come back in some unideal way
	- automatically run after a fetch request (any time you use the `.fetch()` method).
		- response from the server is run through it and whatever it returns becomes the model or collection data
		- model should return an object
		- collection should return an array of objects

## Challenge
Write a function that returns the unique items from two arrays. The original arrays should remain untouched:

```js
var arr1 = [1, 6, 4];
var arr2 = [3, 1, 2, 4, 9];

diff(arr1, arr2); // returns [6, 3, 2, 9]
arr1 // still evaluates to [1, 6, 4]
arr2 // still evaluates to [3, 1, 2, 4, 9]
```

## Notes
- review backendless
	- ownership of data
- relational data and de/normalized data

## Resources
