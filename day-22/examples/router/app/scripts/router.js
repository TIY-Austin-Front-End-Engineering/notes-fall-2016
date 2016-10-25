import Backbone from 'backbone';
import $ from 'jquery';
import renderHome from './renderHome';

const routerSettings = {
	routes: {
		''			    : 'renderHome',
		'posts'     : 'renderPosts',
		'posts/:id' : 'renderSinglePost',
		'*anything' : 'render404'
	},
	renderHome: () => {
		$('.container').empty();
		renderHome();
	},
	renderPosts: () => {
		$('.container').empty();
		console.log('render posts code would go here');
	},
	renderSinglePost: (id) => {
		console.log(id);
	},
	render404: () => {
		$('.container').html('sorry, did not find that')
	}
}

const Router = Backbone.Router.extend(routerSettings)

var router = new Router();

export default router;
