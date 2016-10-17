
[Table of Contents](/README.md)

# Day 17

## Review
- hashchange
- DRY spa - see example in code
- drilling down into arrays

## Challenge
make a button that says "click me!" and, when clicked, says "loading..." and becomes disabled. after 4 seconds, turn the button back to normal.

## Notes
- AJAX
	- blocking code
		- something in our code takes a long time, and that locks the browser until that code finishes
		- the only way around this is to make our code asynchronous
	- async event loop
		- when you run an async callback, it gets pushed to the task queue
		- this is like we have a second call stack of code to run after our first call stack is complete
	- asynchronous javascript and xml
		- async request involving data across the internet
			- xhr : xml http request
			- 4 primary types of requests (**http verbs**):
				- GET - get data
				- POST - sending NEW data
				- PUT - edit existing data
				- DELETE - delete data
- API
	- application interface
	- typically it refers to the way we interact with a web apps data
	- make requests to an API to exchange data without having to block our UI.
- JSON
	- JavaScript Object Notation
		- considered the standard for formatting data that gets passed through ajax requests
	- object (or array) literal
	- all keys have double quotes around them
	- only double quotations are valid
	- trailing commas are not allowed
- make an ajax request:
	- `$.ajax(settings)`;
	- settings is an object
		- it must contain an url, a type, success callback, error callback
	- most apis are not ok with 'crossorigin' requests 'CORS'
		- (are you working with a backend?) ask your back end dev to turn on CORS
		- (for public apis) try jsonp
			- include in settings the following key/value: `dataType: jsonp`

## Resources
- [The Event Loop Video](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Ajax settings object docs](http://api.jquery.com/jquery.ajax/)
