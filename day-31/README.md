
[Table of Contents](/README.md)

# Day 31

## Review
- our build tool is currently compiling sass to css using ruby sass, and es6 to es5 using babel (this includes modules, arrow fns, lets and consts)
- retrieving sub-sets of data from the server and having it play nice with the front-end
- initialize - the constructor code that runs when we use `new`
	- set up listeners
	- set values that were passed in to the constructor onto the instance
	```js
	Backbone.Model.extend({
		initialize(favoriteColor) {
			this.favoriteColor = favoriteColor;
		}
	})
	```

	- for models or collections you might fetch in initialize
	```js
	Backbone.Collection.extend({
		initialize() {
			this.fetch();
		}
	})
	```

## Challenge
Create a function that takes an array and returns a copy of that array with all duplicate entries removed. Preserve the order as much as possible.

```js
removeDups([2, 3, 4, 2, 1, 1, 1, 43, 2]) // returns [2, 3, 4, 1, 43]

function removeDups(arr){
	return arr.filter((num, i, array)=> {
		return array.indexOf(num) === i;
	})
}
```

## Notes
- React - what and why?
	- facebook invented react to solve some facebook level problems
	- it's very fast
		- react creates a "virtual dom" (duplicate version of the entire DOM) to make comparisons against
		- if data changes, but react finds no change between virtual dom and your intended re-write, it won't repaint the actual dom
		- if changes are found, react optimizes the repainting to only change relevant dom structures
	- it doesn't have 2 way data binding
		- with 2-way data binding our models and views were linked automatically and we didn't have to manage repainting DOM or updating models
		- react introduced 1 way data binding
			- there is a flow of data it's one directional throughout the app
	- developer friendly syntax
		- you'll see it when we start
		- there was pushback but by now it's accepted
		- **jsx** - javascript xml, which is basically html embedded directly in javascript
		- a caveat to this jsx isn't vanilla, it's not es6, we have to compile it.
- adding react to a project
	- install dependencies: `npm install --save react react-dom`
	- setup the compiler: add to line 37 of package.json file: `"react"`
- Put something in the DOM
	- use `ReactDom.render()` (see notes in code sample)
- Component
	- what it is
		- combined html elements that go together to perform a single function
		- similar to semantic html and classes, but now we call them components and we create them as units
	- when to make one
		- start with a wireframe or idea of where we're going
		- break down our page into repeated features
	- how to make it
		- typically each component has it's own module
	- how to give it data
		- any attributes that aren't known to the DOM that we pass into a JSX component will be available in that component's constructor as `this.props` (they are considered "properties" of that component)
- Fancy component stuff
	- do the work before the return and store the result in some variable
	- put the variable into the component
		- rendering based on a decision
		- rendering a list
			- the variable we store the info in is usually a result of a map function. 

## Resources
