import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		age: 0
	},
	idAttribute: 'objectId',
	getOlder() {
		this.set('age', this.get('age') + 50);
	}
});
