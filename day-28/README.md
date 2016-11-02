
[Table of Contents](/README.md)

# Day 28

## Review
- logout

## Challenge
Create a function that takes a single camelCased string and returns the number of words found in that string. For example:

```js
countCamelCase('thisStringHasFiveWords') // returns 5
countCamelCase('justinBieber') // returns 2
```

You may want to learn about regular expressions to solve this problem: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Notes
- `$(document).ajaxSend(callback)`
	- a method that allows us to intercept (and manipulate) all ajax requests made by the document
	- useful for adding headers to every request, rather than manually setting those headers on each request
	- the callback will be run after the ajax starts but before it actually makes the request
- auto-login
	- use `localStorage` to keep track of the user's info beyond refreshing
	```js
	window.localStorage.setItem('user-token', 'my cool token');
	window.localStorage.getItem('user-token'); //retrieves the token
	window.localStorage.clear(); //clears all local storage for this domain
	```

	- after login, save the user token (and any other user info you might want to ) in the local storage
	- after logout, remember to remove that info from local storage
	- be aware that you will get bugs and need to handle them, if say your token expires and therefore invalidates your requests
- `initialize` on a Backbone object (model, collection, router, view) runs one time as soon as the object is instantiated.
	- we used it for checking local storage for the user's token when we instantiated the session model, and then set the token.
- Backbone Views
	- constructors that create objects which represent a single html element.
	- created with `const MyView = Backbone.View.extend({})`
	- instantiate with `let myViewInstance = new MyView()`
	- the basic 5 steps to getting a BB View into the DOM:
		- create the constructor
		- give it a `tagName` property
		- export/import
		- instantiate it
		- append the instances `.el` property to the DOM
	- getting an element to render its contents in 3 steps:
		- create the template function that returns the Contents
		- create a render function that appends the template's return value into the element `this.$el.append(this.template())`
		- call the render function! `instance.render()` - usually in either the router, after we instantiate the view OR in a parent view
	- adding event listeners to backbone views in 3 steps:
		- create an `events` object in the view constructor
		- make a key/value pair for the event in question
			- key is a string that is the name of the event followed by a space and a css selector for the element within the view where the event occurs
			- value is the name of the function we want to run (as a string)
		- create that function on the view constructor

## Resources
