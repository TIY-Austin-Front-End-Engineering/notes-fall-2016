import Backbone from 'backbone';
import _ from 'underscore';

var MenuItem = Backbone.Model.extend({
	parse(data) {
		if (data.rating) {
			data.meta = data.rating;
		} else if (data.style) {
			data.meta = data.style;
		} else {
			data.meta = ""
		}
		return data;
	},
	updateItem(description) {
		this.set('description', description);
	}
});

var Menu = Backbone.Collection.extend({
	url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json',
	model: MenuItem,
	parse(data) {

		return _.flatten([
			data.Beer.map(function(item) {
				item.type="beer"; return item;
			}),
			data.entrees.map(function(item) {
				item.type="entree"; return item;
			}),
			data.games.map(function(item) {
				item.type="game"; return item;
			})
		]);
	}
});

var menu = new Menu();
menu.fetch({
	success(collection, data) {
		// console.log(collection);
		menu.get('15').updateItem('this thing supser cool');
		// console.log(menu.get('15'));
	}
})


// array methods
var a = [1,2,3,4,5];
// var pushResult = a.push(900, 793);
var newArray = a.concat(900, 793);

var b;
for( var i = 0; i< a.length; i++) {
	console.log(a[i]);
	b = a.slice(i);
}

console.log(b);
console.log(a, newArray);
// console.log(pushResult);
