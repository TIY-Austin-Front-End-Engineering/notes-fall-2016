import Backbone from 'backbone';

import Post from '../models/blog';

export default Backbone.Collection.extend({
	model: Post,
	url: 'http://tiny-za-server.herokuapp.com/collections/blogPosts',
	like(id) {
		// get the particular post to like:
		let model = this.get(id);
		model.save('likes', model.get('likes') + 1, {wait: true});
	}
});
