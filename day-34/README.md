
[Table of Contents](/README.md)

# Day 34

## Review

## Notes
- ajax and backbone with react
	- where to make ajax requests and collection/model listeners
		- try to consolidate state/data as high up the tree as possible
		- fetch and set up listeners in the mount fn of that high up component
			- your listener should set state using the `collection.toJSON()`
		- get initial state for that component using the `collection.toJSON()`
	- giving props to `{this.props.children}`
		- when a component is created by a Route, but it still needs data:
			- create a variable for childrenWithProps
			- you may need to check that data is available before doing the next step (we did in our example in class)
			- Map over `this.props.children` using [`React.Children.map()`](https://facebook.github.io/react/docs/react-api.html#react.children.map)
				- inside the map, return a copy of the child and give it props using [`React.cloneElement()`](https://facebook.github.io/react/docs/react-api.html#cloneelement)
			- render the new children variable instead of `this.props.children`
	- to CHANGE data
		- no matter where you are in the component tree (how deep) ALWAYS reach out to the top level (store) to make changes to data
			- this keeps the single source of truth principle
		- maybe helpful to create custom functions on the collection or model to make it easier to do this work
			- probably in your component you'll do something like
			```js
			store.docs.markAsRead(this.props.doc._id)
			```
			- in your collection constructor you probably have something like
			```js
			markAsRead(id) {
				this.find(id).set('read', true);
			}
			```

## Resources
