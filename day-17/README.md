
[Table of Contents](/README.md)

# Day 17

## Review
- jsonp - use for crossorigin / CORS errors

## Challenge
write a function `names()` which takes a string of comma-separated names (first and last) and then returns an object where each last name is a key, whose value is an array with each first name as a string in it

```js
names("George Washington, Bryan Adams, John Adams, Kanye West")
  //  {
  //     Washington: ['George'],
  //     Adams: ['Bryan', John'],
  //     West: ['Kanye']
  //   }
```

## Notes
- RESTful services
	- url endpoint and a verb combined is a service
	- REST REpresentation State Transfer
		- data as nouns
		- what is State??
			- current "state of affairs"
			- what information is the app representing RIGHT NOW?
			- let's break it down and represent it in objects and arrays.
		- urls usually follow this pattern:
			- `plural-noun` for the home of the whole array of objects
				- POST to this address to create a new one in the list
				- GET from this address to get the whole list
			- `plural-noun/id` for the home of ONE object
				- PUT (edit), DELETE or GET for that particular object
			- for tiny pizza server
				- `http://tiny-za-server.herokuapp.com/collections/<plural-noun>`
				- `http://tiny-za-server.herokuapp.com/collections/<plural-noun>/<id>`
- app building steps:
	- sketch out my app
		- draw each page
		- give each page a url if appropriate
	- figure out WHAT happens WHEN on each page
		- write it down!
	- data modeling - figure out what the state looks like
		- write it down!
	- start coding
		- hard code into HTML any thing that is on EVERY page
		- think about what a user would do and go in order
		- write down user stories, steps a user takes through our application
		- template or hard code some HTML
		- move it to javascript later
- AJAX requests
	- POST
		- include `contentType` in our ajax request, almost always set to `'appliction/json'`
		- include `data` in our request, `JSON.stringify(data)`
	- PUT
	- DELETE

## Resources
