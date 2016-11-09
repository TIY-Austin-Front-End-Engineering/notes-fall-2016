
[Table of Contents](/README.md)

# Day 33

## Review
- declarative state

## Challenge
Write a palindrome tester that doesn't use `.reverse()`

```js
isPalindrome('tacocat') // true
isPalindrome('A man, a plan, a canal: panama') // true
isPalindrome('whatever this is dumb') // false
```

## Notes
- React Router
	- installing
		- `npm install --save react-router`
	- basic use
		- cannot import it directly
		- react-router only has named exports, which means we must import the things within it that we need using their proper names.
		- since Router from react-router is a component, we need to make an instance of it, typically we could set it up in a separate file somewhere to keep our code cleaner
		- make an instance of the router,
			- it needs the history attribute
			-	give it instances of routes
				- routes need path attribute and a component attribute
	- basic routes
		- need an attribute for path and component
			- path is the url
			- component is the name of the component to render
			- can be self closing
			- can also be nested
				- not self closing, open and closing route tags surrround other route tags
				- the parent route tag needs to render `this.props.children` if you want to see those nested route's components in the DOM
	- parameterized routes
		- use `:something` syntax in a Route's path attribute
		- the component of that route will receive the matched data from the url as `this.props.params.something`
		- we use that value to make decisions about what to render inside the component
	- navigating
		- links
			- we can make anchor tags like we always do but we should use the Link tag supplied by react-router instead
			- it works just like an a tag but href become 'to'
		- programmatic
			- we import the history we're using (hash or browser) from react-router
			- push to that history the url we are trying to go to
			- `hashHistory.push('faces/demetrius')`
- `this.props.children`
	- any react component that is not self closing renders the components it's wrapping when `this.props.children` is in its render function
- ajax and state
	- getting data INTO the app
	- modifying data after it's there

## Resources
