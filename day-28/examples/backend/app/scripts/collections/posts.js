import Backbone from 'backbone';
import Post from '../models/post';

export default Backbone.Collection.extend({
	url: 'https://api.backendless.com/v1/data/posts',
	model: Post,
	parse(data) {
		console.log(data);
		return data.data;
	}
});
