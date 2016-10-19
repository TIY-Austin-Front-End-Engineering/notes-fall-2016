// object literal syntax for writing an object
var anObj = {
	name: 'princess amalthea',
	species: 'unicorn'
}

anObj.age = 57;

console.log(anObj);

function Unicorn(name, age, power) {
	'use strict';
	this.name = name;
	this.power = power || 'healing';
	if (typeof age === 'undefined') {
		this.age = Infinity;
	} else {
		this.age = age;
	}
	// this line below is the same as the if statement above:
	// this.age = typeof age === 'undefined' ? Infinity : age;
	this.hornCount = 1;
	this.species = 'unicorn';
	this.introduceSelf = function() {
		return 'Hi my name is ' + this.name + ' and my power is ' + this.power;
	};
	return this;
}

var amalthea = new Unicorn('princess amalthea', 57, 'super healing');
var harold = new Unicorn('harold', false);

console.log(amalthea);
