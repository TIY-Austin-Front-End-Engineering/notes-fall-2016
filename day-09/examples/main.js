// js primitive types
// primitives cannot be broken down further and still be javascript
// they have inherent meaning to our interpreter (javascript)
//boolean
true
false

// numbers
123
1.4
-Infinity
NaN

// string
'any words, numbers, well, characters'
'of any lenth'
'123'
'0kfds934'
''

// undefined - default value for a variable
// not yet a value of anything
undefined

// null - explicitly nothing
null

//variables!
// variable declaration, aka declaring or defining a variable
var firstName;
console.log(firstName);
// variable assignment, aka assigning a value to a variable
firstName = 'Jess';
console.log(firstName);
// declaration and assignment in one fell swoop:
var lastName = 'Scheuring';

// expressions - code that evaluates to a type, usually made of one or more types and one or more operators

// arrays
var myArr = ['jess', 123, false, lastName, [12, 123, 1234]];

var index = 3;

console.log(myArr[1]); // prints 123
console.log(myArr[4][2]); // prints 1234
console.log(myArr[index]);

// objects
var myObj = {
	firstName: 'Jess',
	lastName: 'Scheuring',
	favoriteNumber: 123,
	favoritePet: {
		firstName: 'Samantha',
		species: 'unicorn',
		age: 6836
	},
	favoriteNumbers: [9, 13, 32]
}

console.log(myObj.favoriteNumber);
// console.log(favoriteNumber); this will break bc favoriteNumber has no meaning without it's parent object
console.log(myObj.favoritePet);
console.log(myObj['favoriteNumber']);
console.log(myObj['favorite' + 'Number']);
var key = 'favoriteNumber';
console.log(myObj[key]);
console.log(myObj.favoritePet['species']);
console.log(myObj.favoritePet.species);
console.log(myObj.favoriteNumbers[2])

myObj = {}; //reassigning using the assingment operator
console.log(myObj.favoriteNumber)

myArr[0] = 'Gil';
console.log(myArr);

myObj.firstName = 'Drake';

myObj.favoritePet = null;

console.log(myObj);

// syntax for writing a function
function theNameOfMyFunction() {
	//code that does stuff goes here
};


console.dir(document)

// accessing or FINDING elements in the DOM
var div = document.querySelector('.coolDiv')
console.dir(div)





//
