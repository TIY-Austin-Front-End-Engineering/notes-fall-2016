import Backbone from 'backbone';

export default Backbone.Model.extend({
	rootUrl: 'http://tiny-za-server.herokuapp.com/collections/blogPosts',
	defaults: {
		likes: 0
	},
	idAttribute: '_id',
});
