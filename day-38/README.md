
[Table of Contents](/README.md)

# Day 38

## Review
- render.js file
- how to check if properties are correct after change on a model using chai
	```js
	// checking side effects of the addItem function
	model.addItem({name: 'cat food', price 37.4});
	expect(model.get('items')).to.deep.equals([{name: 'cat food', price 37.4}]);
	```
- for making and checking errors using chai
	- you must use bind to define the function with the proper `this` value and proper arguments
	```js
	// checking that a function throws an error
	expect(model.removeItem.bind(model, {price: -1})).to.throw();
	```
- checking return value of a function
	```js
	// checking return value of a function
	expect(someFunction(args)).to.equal('returnValue');
	```

## Challenge
Write a function that confirms the ending of a string. It should return true or false.

```js
confirmEnding('this is awesome!', '!'); // true
confirmEnding('yape', 'eee'); // false
confirmEnding('mazing', 'zing'); // true
confirmEnding('zingboo', 'zing'); // false
confirmEnding('zingboozing', 'zing'); // true
confirmEnding('cool', 'cool'); // true
```

## Notes
- testing React components
	- what do we test
		- does the outputted html look like we expect?
			- test this as without setting any state
			- test this with state set to something specific (test the HTML for all possible state outcomes)
			- test this with props as well (test the HTML for different values in props)
		- test to make sure elements have the right attributes (if a checkbox should be disabled, make sure it is, for example)
		- check that event handlers run the proper functions
			- do this with spies
	- how to test
		- install enzyme `npm i --save-dev enzyme`
		- import a render function (called shallow) from enzyme `import {shallow} from 'enzyme';`
		- create an instance of a React component using the shallow render function `let wrapper = shallow(<Component/>);`
		- run expect tests on the wrapper using enzyme's library

		- to spy on react component function, use the react sinon library
			- install it: `npm install --save-dev sinon-spy-react`
			- import it: import `{spyOnComponentMethod} from 'sinon-spy-react'import`
			- use it: 

## Resources
- [what to test in a react component](https://daveceddia.com/what-to-test-in-react-app)
