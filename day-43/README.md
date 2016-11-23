
[Table of Contents](/README.md)

# Day 43

## Review
- to make a `package.json` file in a project run `npm init` and answer the questions it gives you

## Challenge
Write a function that pads a digit with zeros until it is a specified length
```js
pad(3, 7) // returns '0000003'
pad(2312, 5) // returns '02312'
pad(23, 2) // returns '23'
```

THEN write a function that uses your pad function to pad an array of numbers with zeros until they are all the same length.
```js
padAll([1, 543, 42, 9184]) //returns ['0001', '0543', '0042', '9184']
```

## Notes
- Node
	- runtime environment for ecmascript - 'v8 engine'
	- runs NOT in the browser (we installed it directly onto our computer)
	- we can interface with the runtime env. using our terminal by typing `node`
	- we can also run whole js files with the node command `node path/to/file.js`
	- node is module scoped, in order to use global variables we have to import
		- built in node import syntax is the `require` syntax
- Recursion / Recursive functions
	- call a function within itself
	- usually anytime you have a while loop you can recurse instead
	- see `main.js` for a couple examples
- Promises
	- a way to handle async code neat and clean like.
	- use chaining to manage callback syntax
	- promise library was introduced to js in es2015
		- in es5 promises no go, jquery made a promise library
		- see promises example
- browser history
	- hashHistory uses the `#` and browserHistory does not
	- the `#` in a url is used to be for id's on elements to force scroll for example
		- it doesn't cause a new server request when we change the `#` part of the url
		- they aren't as pretty as regular urls
	- starting es5 we have support for javascript to take over the browser history and intercept actual url changes as well as # changes
	- this works fine for changing the url once we've already loaded our javascript
	- HOWEVER if we directly ask the server for one of those url's that should be managed by our javascript we'll probably get a 404 or worse just broken nonsense
		- in this case our server needs to know what to do if we make a request that it doesn't recognize - specifically it should return our app (no matter what)

## Resources
