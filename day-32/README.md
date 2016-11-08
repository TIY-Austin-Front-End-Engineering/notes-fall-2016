
[Table of Contents](/README.md)

# Day 32

## Review
- paths
	- root relative : starts with `/` eg: `/main.js`
		- gets added to the root domain (like whatever.com)
	- absolute : starts with the protocol eg:
	`http://google.com`
	- relative : doesn't start with a `/` or protocol
		- `main.js`, attaches to the current location
- parameterized routes
	- see profile route in router file
- rendering lists of things with react
	- mapping within a render function
	- see NameList and NamePreview files

## Challenge
Create a function that reverses each word within a string, but keeps the words in the same order.

```js
reverseInPlace('this is cool') // returns 'siht si looc'
```

## Notes
- data store
	- there is a single, declarative, source of truth for our application state
	- at the top of the tree there is ONE single var for all our app data.
	- at any moment in time we could take our "state" object (data store) and recreate the app exactly as it appears in the dom right now.
		- this changes the way we think about what we keep track of in our state objects - models and collections
		- `store.js`	file for keeping track of all app state (models and collections) is sibling to main.js and router.js
- container views
	- react/flux apps have a concept of container views, which are basically smart views
		- they get data from the store directly
		- they handle all the behavior, and render all their children, and pass the data down using props.
		- container views are page level views, aka route level views
- `this.state` within a component
	- state is for changing data at the component level.
		- when a component changes its own data, it probably needs state to manage this.
	- to make state we need `getInitialState` method to be defined in the component
		- must return an object
		- that object is the state when the component starts up
		- read state with `this.state.whatever`
		- write state `this.setState({keyToChange: valueToChange})`
	- whenever state changes, it causes a new render cycle
- event handling in react
	- refs
	- onClick or similar
	- custom functions
- component lifecycle
	- refers to the render cycle of a component and what functions occur when
	- several built in functions on react components
		- `getInitialState` - the first thing that happens in a component's lifecycle (only if it's defined)
		- `componentWillMount` - will be mounted into the DOM, happens right before the initial render.
			- might use it to check if we actually want to render this thing right now.
			- use it often to initiate fetching data from the server
		- `render` - runs after the component mounts the first time AND when props or state change. responsible for stuffing the element
		- `componentDidMount` - right after the first render, only ever one time for a component
			- might use this to initiate fetching or set up listeners on our data
		- `componentWillUnmount` - right before the component is removed from the dom

## Resources
- [component lifecycyle method docs](http://reactjs.cn/react/docs/component-specs.html)
- [syntax for react event handlers](https://facebook.github.io/react/docs/events.html)
