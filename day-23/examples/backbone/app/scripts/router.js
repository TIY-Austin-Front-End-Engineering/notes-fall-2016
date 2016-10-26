import Backbone from 'backbone';
import $ from 'jquery';
import renderNewPostForm from './views/newPostForm';
import Posts from './collections/posts';

let posts = new Posts();
const Router = Backbone.Router.extend({
	routes: {
		'': 'renderNewPostForm'
	},
	renderNewPostForm: function() {
		$('.container').append(renderNewPostForm(posts));
	}
});

const router = new Router();

export default router;
