// an example of bind for posterity
document.querySelector('button').addEventListener('click', function(obj, e) {
	// console.log(obj);
}.bind(null, {name: 'jess'}))


var coolString = 'Unicorns are cool';

var wordArray = coolString.split(' ');
console.log(wordArray);

function Unicorn(name) {
	'use strict';
	this.name = name;
	this.species = 'unicorn';
	return this;
}

Unicorn.prototype.usePower = function() {
	console.log(this.name + ' zapped you');
}
//
// Unicorn.prototype = {
// 	usePower: function() {}
// }

var unicorn = new Unicorn('Harold');
var unicorn2 = new Unicorn('Slimey');

//
function MagicalCreature(name) {
	'use strict';
	this.name = name;
	this.power = 'zapping';
	return this;
}

MagicalCreature.prototype.usePower = function() {
	return 'used ' + this.power;
}

// how to hook up prototypal inheritance
function Fairy() {
	'use strict';
	MagicalCreature.apply(this, arguments)
	this.power = 'flying';
	return this;
}

Fairy.prototype = Object.create(new MagicalCreature())
Fairy.prototype.constructor = MagicalCreature;

var tink = new Fairy('tinkerbell');




//
