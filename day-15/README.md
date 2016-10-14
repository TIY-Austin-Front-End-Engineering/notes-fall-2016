
[Table of Contents](/README.md)

# Day 15

## Review
- event object (`e.preventDefault()`)
	- to stop the page from refreshing when you click on a submit button inside a form
- testing for empty values and `.trim()`
	- user inputted values should be .trim()'d before submitting to get rid of trailing white space
	- test if the value exists rather than if it equals something specific.
- writing object literals
	- you can add values to an object using . notation and the assignment operator
	- or you can put the values directly into the object on creation of the object
- validation of input
	- we need to check for more than just an empty value
- testing functions more fully!
	- one example of your function working isn't enough proof that your function works
	- try to think of edge cases or different examples of input to test your function agains.
- `.forEach()`
	- see example in code
- difference between jquery wrapped and non-jquery wrapped elements
	- when i use a jquery selector (`$('css-selector')`) i get back a list of matching elements wrapped in jquery.
	- that list may be 0 or more items long
	- the items inside that jquery wrapper are just plain html elements
	- you may have to re-wrap an item in jquery if you pull it out of the list


## Challenge
Write a function letterCount() that takes a string and returns an object with the count of each letter that is in the string.

```js
letterCount("hello world");
// will return:
// {
//   h: 1,
//   e: 1,
//   l: 3,
//   o: 2,
//   w: 1,
//   r: 1,
//   d: 1
// }
```

## Notes
- jquery event listener
- jquery attr function
- spa - single page application
	- the heavy lifting of the application logic is done by the front end! (us)
	- load only one html page, and let javascript change what we display to the user based on user events
		- one option would be to hard code all your html and then have buttons or links that "turn on" or "turn off" certain elements (like display none, or display block)
		- have a template for different screen, turn it on or off, plug in the right data from my data object.
		- use jquery to create elements based on what the user has clicked, and put them into the page.
		- listen to the URL `window.addEventListener('hashchange')` have a decision tree to look at that url and create elements based on it.
	- think about our web app as data! if i have the content of the page in a javascript variable as data, i can map, filter, foreach, over that data to create different pages.

## Resources
