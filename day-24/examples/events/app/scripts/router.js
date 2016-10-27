import $ from 'jquery';
import Backbone from 'backbone';
import Unicorns from './collections/unicorns';
import renderList from './views/renderList';
import renderForm from './views/renderForm';


let unicorns = new Unicorns();
let container = $('.container');

const Router = Backbone.Router.extend({
	routes: {
		'' 						 : 'home',
		'new' 				 : 'new',
		'unicorns' 	   : 'unicornList',
		'unicorns/:id' : 'unicorn'
	},
	home() {
		container.empty();
		console.log('home page');
	},
	new() {
		container.empty();
		container.append(renderForm(unicorns));
		console.log('home page');
	},
	unicornList() {
		$('.form-area').append(renderForm(unicorns));
		unicorns.on('update', () => {
			console.log('update');
			container.empty();
			container.append(renderList(unicorns));
		})
		unicorns.fetch();
	},
	unicorn(id) {
		console.log('render unicorn', id);
	}
});

const router = new Router();

export default router;
