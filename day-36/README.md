
[Table of Contents](/README.md)

# Day 36

## Review
- Backbone Models and Collections
	- why not just use a plain object
		- they have convenience methods for ajax requests
		- they have convenience methods for lots of stuff that comes with underscore
			- sorting,
			- plucking,
			- finding by any attribute
			- getting by id
		- **they can emit events when stuff happens, and we can register listeners on those events**
	- methods
		- while writing custom methods, `this` refers to the instance of the model or collection you're working on.
			- the point of these custom methods is that the behavior they do is somewhat complicated - it's more than just `model.set` or `model.get`
			- if you wrote it originally in a component, you may need to change the reference to the model to a reference to `this`
		```js
		Backbone.Model.extend(questionId) {
			defaults: {
				clues: []
			},
			markAsComplete(questionId) {
				const newClues = this.get('clues').map((clue, i, arr) => {
					if (questionId === clue.id)	{
						clue.read = true;
					}
					return clue;
				});
				this.set('clues', newClues);
			}
		}
		```
	- keeping track of behavior within a collection
		- write custom methods!
		- make sure those methods trigger some event to be emitted
		- trigger events using `collection.trigger('eventName')` or `model.trigger('eventName')`
		- listen to those events using `collection.on('eventName')` or `model.on('eventName')`

## Challenge
Write a function that turns a sentence into a title by capitalizing all the first letters of all the sentence's words

```js
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
```

## Notes
- like button 4 ways
	- using a button with state
	- using a "controlled" input
		- a controlled input is one whose `value` property is controlled, or attached to JS somehow
	- using store
		- we pass data all the way down to the lowest component to display
		- when it's time to change data, we go directly to a method on a model or collection and let that change trickle down.
	- using callback props
		- keep the actual function that modifies data at a level where the data SHOULD be known
		- pass that function into the component that needs it using props

## Resources
