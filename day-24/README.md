
[Table of Contents](/README.md)

# Day 24

## Review
- router hash parsing
- collections must have only one type of models

## Challenge
Revisit Tuesday's challenge with a new partner!

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
- validation
	- because of separation of concerns, validation should happen on the model (it's data management)
	- backbone models expect a validate function which will be used before saving to a server
		- return nothing if the data is valid
		- return an error if the data is invalid
- pub/sub
	- publish / subscribe
	- a way to handle passing around messages within an application
	- it's events.
- backbone events
	- all backbone objects have pub/sub built in!
	- we can subscribe to the events using the `.on()` method, just like jquery
		```js
		model.on('change', () => {
			// do something when the model changes, like maybe update the UI
		})
		```

	- different backbone objects emit different events:
		- models and their collections emit `change` events whenever a model's attributes change. this is triggered by using `.set()` OR `.save()` on a model.
		- collections emit `update`, `add`, and `remove` events whenever a model is added/removed to/from them.
		- routers emit `route` events whenever we programmatically navigate to a new route

## Resources
- [events that backbone has built in](http://backbonejs.org/#Events-catalog)
