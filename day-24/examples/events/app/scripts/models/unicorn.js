import Backbone from 'backbone';

export default Backbone.Model.extend({
	idAttribute: '_id',
	rootUrl: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
	validate(attrs) {
		if (!attrs.name) {
			return new Error('no name');
		} else if (!attrs.color) {
			return new Error('no color');
		} else if (!attrs.age) {
			return new Error('no age');
		}
	}
})
