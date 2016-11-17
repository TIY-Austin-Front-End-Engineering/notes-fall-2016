
[Table of Contents](/README.md)

# Day 39

## Review
- use chai-enzyme instead of JUST enzyme and chai
	- install: `npm install --save-dev chai-enzyme`
	- setup: make a test file called `setup.js`
		- include in it:
		```js
		import chai from 'chai'
		import chaiEnzyme from 'chai-enzyme'

		chai.use(chaiEnzyme()) // Note the invocation at the end
		```
		- in `package.json` tell our test command that setup is a required step before running the tests
			- add `--require test/setup.js` to the test script in package.json
- react state tests
	- for components that have state, run tests for their output with state in various configurations.
	- don't worry about testing HOW the state got to be what it is
	- just test the outcome of the state being a certain way.
- function testing
	- test the output of a function (return value)
	- sometimes we need to test for error handling if a fn needs specific params
	- test for any expected side effects
		- if a fn calls another fn, JUST make sure it actually calls it with a spy.
			- this may mean, expecting the spy to get particular arguments
		- separately test that fn.
- propTypes (react propTypes)
	- a feature of react components where you can specify that certain props MUST be of a type and or are required or the component will break
	```js
	React.createClass({
		render() {
			return (
				<li>{this.props.data.title}</li>
			)
		},
	  propTypes: {
	    data: React.PropTypes.object.isRequired,
	  },
	  ...
	});
	```

## Challenge
Create a Rot13 decoder. Rot13 is when each character in the alphabet is represented by a character 13 letters later in the alphabet. So A is represented by N and B is represented by O.

```js
rot13('YOU DID IT'); // LBH QVQ VG
rot13('WOO FOR MATH'); // JBB SBE ZNGU
```

if you complete this, make it so you can specify the offset (to something other than 13)

```js
rot13('YOU DID IT', 18); // QGM VAV AL
rot13('WOO FOR MATH', 18); // OGG XGJ ESLZ
```

## Notes
- agile - project management style popular with software development
	- considered best practice for software dev.
	- continuous improvement instead of one big end goal
	- typically we break projects into sprints - small segment of a project
		- 1-2 week sprints are typical
		- could have continuous sprints which means no time boxing
		- some companies will have like, 3 sprints a year, and they aren't really agile
	- start with "user stories"
		- what the user would do in the app
		- "as a <type of user> i want to <do something> so that i can <outcome>"
		- we want to break user stories down as much as possible, and leave out implementation details
		- try to create user stories that are discrete - so that as you complete a user story you have a working application
			- this is hard for getting started with a new application
	- at the beginning of a new sprint you'll go through user stories and pick the next logical one to work on.
		- work on that feature/story until it is pushable
			- this is where the planning we've been doing happens
		- next it goes through qa and code review
		- when you pick a user story to work on, MAKE AN ESTIMATE of how long it will take to complete
			- keep track of your actual work time
			- when you make your initial estimate it'll probably be low by a factor of 3
	- meetings
		- start the sprint
			- go though stories and pick important ones
			- break them down as much as possible into smaller discrete bits
			- defining requirements for those stories
			- assign stories to folks
			- make your estimates
		- stand-ups
			- daily throughout the sprint
			- what did you do yesterday
			- what are you doing today
			- what is blocking you
		- retrospective
			- unpack the process

## Resources
- [about react proptypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
