
[Table of Contents](/README.md)

# Day 37

## Review
- don't import modules into another module unless you're using them

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
- unit tests vs integration tests
	- unit tests are for a specific function or module in isolation from the rest of your code
		- testing your src code
	- integration (end-to-end) tests are more for how the pieces of code fit together
		- testing your docs code
- test runner - mocha
	- should already be installed on your machine, test it by `mocha --version`
	- it runs tests found in the `test` folder by default. you can specify another location for your tests if you want
	- run `mocha` from your project folder and if there is a test folder in it, those tests will run!
		- to make `mocha` happy with your es2015 code you must add `--compilers js:babel-register --recursive` to the test script in your `package.json` file.
		- run `npm test` instead of `mocha`
- assertion library - chai
	- already included in your `package.json`, so you shouldn't have to install it
	- helps test equality where javascript doesn't always make it easy
```js
	describe('the module (what is the name of your module you\'re testing)', ()=> {
		it('should or be something (describe what you\'re testing about the module)', () => {
			// this is the actual test, made with chai expect
			expect(someExpression).to.equal(something);
		})
	})
```
- what to test for
	- is our module the correct type? (instance of a bb model, for example)
	- does our module have the correct properties (like idAttribute for example)
	- does a model have the correct attributes?
	- do functions exist?
	- do functions return what they should?
	- do functions have the intended side effects?
	- do functions run when they should?
		- spies - sinon
			- to use sinon and spy on function first `npm install --save-dev sinon`
			- then import it `import sinon from 'sinon'`
			- then declare a spy in your test `let spy = sinon.spy()`

## Resources
- [mocha docs](https://mochajs.org/)
- [chai docs](http://chaijs.com/api/bdd/)
