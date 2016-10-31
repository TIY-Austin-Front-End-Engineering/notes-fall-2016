var Unicorn = Backbone.Model.extend({
	idAttribute: '_id',
	rootUrl: 'http://tiny-za-server.herokuapp.com/collections/unicorns'
});

var UnicornColl = Backbone.Collection.extend({
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns'
});

function render() {
	template = $(`
		<div></div>
	`)
}

var unicorns = new Unicorns();

unicorns.on('update', function(coll) {
	console.log(arguments);
	coll.forEach(function(model) {
		console.log(model);
		console.log(model.get('_id'));
	});
});

unicorns.create({}, {
	// success: function(model, data) {
	// 	console.log(model.get('_id'));
	// }
});

function validate(number) {
	function trimWhiteSpace(a) {return a !== ' '}
	function doubleOddIndices(a, i) {if (i % 2 === 0) return a*2; else return a}
	function sum(a,b) {return Number(a) + Number(b)}

	return number.split('')
	.filter(trimWhiteSpace)
	.map(doubleOddIndices)
	.join('').split('')
	.reduce(sum) % 10 ? false : true
}

console.log(validate('1265 123 123'));
