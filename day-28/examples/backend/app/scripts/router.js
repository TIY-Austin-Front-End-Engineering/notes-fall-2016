import Backbone from 'backbone';
import $ from 'jquery';
import Session from './models/session';
import Posts from './collections/posts';
import LoginForm from './views/login';
import registerForm from './views/register';
import PostsList from './views/preview';
import createForm from './views/newBlogForm';
import config from './config'

let session = new Session();
let posts = new Posts();
let $container = $('.container');

$(document).ajaxSend((e, xhr, opts) => {
	console.log('interception');

	//opts is the jquery settings for my ajax request
	console.log(opts);

	// lets say we don't want to send headers unless we're making a request to backendless
	if (opts.url.indexOf('backendless')) {
		// we can set headers using the xhr object
		xhr.setRequestHeader('application-type', 'REST');
		xhr.setRequestHeader('application-id', config.appId);
		xhr.setRequestHeader('secret-key', config.secret);
		xhr.setRequestHeader('user-token', session.get('user-token'));
	}
});

var Router = Backbone.Router.extend({
	routes: {
		''		 			 : 'home',
		'login'			 : 'login',
		'register'	 : 'register',
		'blog'			 : 'preview',
		'blog/create': 'newBlog',
		'blog/:id'	 : 'details'
	},
	home() {
		if (session.get('user-token')) {
			// redirect to blog
			console.log('redirect to blog');
		} else {
			this.navigate('login', {trigger: true})
		}
	},
	login() {
		if (session.get('user-token')) {
			this.navigate('blog', {trigger: true})
		} else {
			$container.empty();
			let loginForm = new LoginForm({
				session: session,
				name: 'jess',
				model: session
			});
			loginForm.render();
			$container.append(loginForm.el);
		}
	},
	register() {
		if (session.get('user-token')) {
			this.navigate('blog', {trigger: true})
		} else {
			$container.empty();
			$container.append(registerForm(session));
		}
	},
	preview() {
		if (!session.get('user-token')) {
			this.navigate('login', {trigger: true})
		} else {
			posts.fetch();
			$container.empty();
			var postsList = new PostsList({collection: posts});
			postsList.render();
			// we want to call render again when we update the collection, but we need to make sure `this` doesn't change, so we bind it to itself
			posts.on('update', postsList.render.bind(postsList));
			$container.append(postsList.el);
		}
	},
	newBlog() {
		if (!session.get('user-token')) {
			this.navigate('login', {trigger: true})
		} else {
			$container.empty();
			$container.append(createForm(posts, session));
		}
	}
});

export default new Router();
