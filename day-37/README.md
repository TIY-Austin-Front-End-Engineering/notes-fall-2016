
[Table of Contents](/README.md)

# Day 37

## Review

## Challenge
Write a function that turns an array into sub-arrays of a specified length.

Extras: if you get that finished, make  sure it still works:
- if no number is specified; 1 is assumed
- if the items in the array don't evenly divide by the number specified
- if the array is shorter than the number specified

```js
subArray([1,2,3,4,5,6], 2) // returns [[1,2], [3,4], [5,6]]
```

## Notes
- test runner - mocha
- assertion library - chai
- what to test for
	- do functions exist?
	- do functions return what they should?
	- do functions have the intended side effects?
	- do functions run when they should?
		- spies - sinon
	- does a model have the correct attributes?

## Resources
- [mocha docs](https://mochajs.org/)
- [chai docs](http://chaijs.com/api/bdd/)
