
[Table of Contents](/README.md)

# Day 22

## Review
- turning off jshint errors about es2015 features
	- jshint reads a `.jshintrc` in the root of your project directory
	- in it you include JSON (basically just make an object literal)
	- should have the key "esversion" and value 6
	- close the file and re-open it, the errors should be gone
- ajax
	- sending and receiving data to/from server without reloading whole pages or resources
	- behind the scenes all the libraries are making these requests using XHR - xml http request (vanilla js)
	- all AJAX on our end is a request, and always gets back a response
	- we've been using jQuery's ajax methods.
		- 4 verbs
			- all of them should include success and error callbacks to handle the response from the server
			- see ajax file in examples for working code
			- GET - get data from the server
				- required props for settings:
				```js
				{
					type: 'get',
					url: '<valid http url (either single OR plural noun)>',
					dataType: 'application/json'
				}
				```
			- PUT - edits data that exists on the server
				- required props for settings:
				```js
				{
					type: 'put',
					url: '<valid http url (single noun endpoint)>',
					contentType: 'application/json',
					data: JSON.stringify(<the data to change as an object>)
				}
				```
			- POST - creates new data that isn't yet on the server
				- required props for settings:
				```js
				{
					type: 'post',
					url: '<valid http url, plural noun endpoint>',
					contentType: 'application/json'
					data: JSON.stringify(<data to send as object>)
				}
				```
			- DELETE - deletes data from the server
				- required props for settings:
				```js
				{
					type: 'delete',
					url: '<valid http url (single noun endpoint)>',
				}
				```

## Challenge
Write a function `stairString` that takes a number as its argument and returns a string that looks like a staircase as tall as specified. Notice that the staircase is right aligned.

```js
console.log(stairString(5))
//    #
//   ##
//  ###
// ####
//#####
```

## Notes
- es2015
	- block scope
		- things about `let`
			- let variables change value from time to time
			- let variables are block scoped
				- as opposed to 'global' or 'function' scoped
			- let's declared inside a block are not available outside that block
			- a block is any block of code that runs together - if blocks, else blocks, for loop blocks, while loop blocks, function blocks
	- arrow functions
		- a way to declare/define a function that uses different syntax, but is still just a function like any other function
			- with one exception - it doesn't have `this`
			- use it for callbacks, because it won't change the value of `this`
			```js
			// anonymous function:
			() => {
				// code to run goes here
			}

			// named fn:
			const coolFn = () => {

			}
			```
	- object destructuring
		- we don't need to specify key and value if the key is the same name as the variable the value is stored in
- Backbone
	- a JS framework that provides structure for writing single page apps (SPAs)
	- install it with `npm install --save backbone`
	- include it in your project with `import <whatever> from 'backbone';`
	- Router
		- a backbone router is an examples of a router
			- routers are the code that is responsible for which page we are currently viewing within our app
		- to hook up the router: 	
		```js
		// 1st step: import backbone
		import Backbone from 'backbone';
		// 2nd step: define routes and their fns
		const routerSettings = {
			routes: {
				'': 'renderHome'
			},
			renderHome: () => {
				// write code that renders home
			}
		}
		// 3rd step: extend the Router constructor with my settings
		const Router = Backbone.Router.extend(routerSettings)
		// 4th step: instantiate the router
		var router = new Router();
		// 5th step: start listening to the hash change
		Backbone.history.start()
		```
		- to make this modular, steps 1-4 go in a router module, step 5 is RUNTIME CODE!


## Resources
