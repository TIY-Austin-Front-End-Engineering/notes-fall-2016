
[Table of Contents](/README.md)

# Day 42

## Review

## Challenge
The following data sample is "normalized":
```js
var data = {
	unicorns: [
		{id: 1,	name: 'amalthea',	powers: [1,5]	},
		{id: 2,	name: 'fred',	powers: [1]},
		{id: 3,	name: 'bob',	powers: [2,5]}
	],
	powers: [
		{id: 1, type: 'flying', description: 'unicorns with this power can fly'},
		{id: 2, type: 'healing', description: 'unicorns with this power can heal others'},
		{id: 5, type: 'invisibility', description: 'you can\'t see this unicorn'}
	]
}
denormalize(data) // returns an array of unicorns with their powers nested inside them as an array of objects
```
First draw out an example of a unicorn data structure as it should appear when de-normalized - aka when the array of power ids is replaced by an array of power objects. Then write a function that turns the data object into the unicorn array with the powers nested inside.

## Notes
- databases
	- document
		- document database typically stores object relationships as denormalized data
		- the objects that are related to another object are stored WITH that object
	- relational
		- tables (literally) but more strict each cell may contain ONLY ONE VALUE
		- cannot store an object within another object, or an array within an object
		- we "nest" objects or arrays within other objects by creating relationships
		- relationships are one-to-one or one-to-many.
			- to create a many-to-many we join two one-to-many's together
- making relationships with backendless
	- read the docs about setting up your table on the back end and follow the steps described [docs here](https://backendless.com/documentation/data/rest/data_relations.htm)
	- when you save a relationship, you should pass an OBJECT for each relationship you want to save, object needs to be formatted like so:
	```js
	// saving an existing object to another object:
	{
		objectId: 'id-of-other-to-save-to-this-object',
		___class: 'StringNameOfTableWhereOtherObjectLives'
	}
	// saving a brand new object to another object (create the object as you would, but include the class value)
	{
		___class: 'StringNameOfTableWhereOtherObjectLives',
		otherProperty: 'value for that property'
	}

	// example payload which would create a new power called invisibility and give it to larry:
	{
		name: 'larry',
		age: 80,
		description: 'blah',
		powers: [
			{
				___class: 'powers',
				power: 'invisibility',
				range: 100
			}
		]
	}
	```
	- to retrieve relationships nested inside their owners: [docs here](https://backendless.com/documentation/data/rest/data_relations_retrieve.htm)
		- add the query parameter to your get request (`https://api.backendless.com/v1/data/tableName?loadRelations=propertyName`)

## Resources
