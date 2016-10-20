
[Table of Contents](/README.md)

# Day 19

## Review
- git partner flow
	- only 1 person makes the repo from scratch
		- add all their partners as collaborators (settings on github)
	- everyone else clones the repo
		-	clone button on github
		- `git clone <copied url> <directory you want the project to live in>`
	- view the diagram on [day 08](/day-08)
- organize our files like this:
	- function declarations at the top
		- functions that are used within other functions should be declared ABOVE those functions
	- var declarations
	- register our listeners
	- runtime code
- bind call and apply - the difference?
	- they are all methods on functions
	- redefine `this` to whatever we specify in their first argument
	- bind returns the function itself, whereas call and apply immediately invoke the function
	- bind sets up the arguments for the function, too.
		- we use this to pass extra arguments to callback functions
	- call and apply are exactly the same BUT one gets the new args as an array, one takes them one at a time

## Challenge
Write a function `getWinner()` that takes two objects as parameters. The objects represent players in a game. `getWinner` should compare each player's scores, and return the winning player. A player's score should be an array of 3 numbers. Each index in a player's score is compared to the same index in the other player's score, and the higher scored player is awarded one point. If the score at that index is the same, neither player receives a point. The player with the most points is the winner. If the result is a tie, `getWinner` should return `null`;

```js
	getWinner({name: 'Joe', score: [1,4,7]}, {name: 'Bob', score: [5,2,0]})
	// returns {name: 'Joe', score: [1,4,7]}
```

 modify the String prototype with a method called `shout` that returns the string in all caps with 5 exclamation points.
```js
 'string'.shout() // 'STRING!!!!!'

 String.prototype.shout = function() {
	 return this.toUpperCase() + '!11!!!';
 }
```

## Notes
- methods are functions that live on something else
	- the "something else" is a type OR an object
- everything in javascript is an object
	- everything in javascript is an instance of a constructor
	- the most basic object is Object
- prototype allows objects to share access to properties
		- first we look up the property on ourselves. if it's there, we just use that.
		- if it's not there, we look up the property on our prototype, if it's there, we use it AS IF it's on US.
		- **methods** almost always want to live on the prototype of a constructor instead of the constructor itself.
		- typically we don't modify existing prototypes very often but we do make special constructors that have access to a particular prototype PLUS our own mods.
- prototypal inheritance - setting up a chain of prototypes and 'sub-classes', constructors that inherit from other constructors.
	- everything is an object. if that object can't find what it is looking for (a property), it has a prototype (another object) it can look to for that property.




## Resources
