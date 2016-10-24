import Unicorn from './unicorn';

function Human(name) {
	'use strict';
	this.name = name;
	this.species = 'human';
	return this;
}

Human.prototype.sayHi = function() {
	console.log('hi, i\'m ' + this.name);
}

export default Human;
