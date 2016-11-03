import Backbone from 'backbone';
import $ from 'jquery';
import Session from './models/session';
import Posts from './collections/posts';
import LoginForm from './views/login';
import registerForm from './views/register';
import PostsList from './views/preview';
import BlogForm from './views/newBlogForm';
import Nav from './views/nav';
import NavContainer from './views/viewWithNav';
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
	protectedRoute() {
		if (session.get('user-token')) {
			return true;
		} else {
			this.navigate('login', {trigger: true});
			return false;
		}
	},
	home() {
		if (this.protectedRoute()) {
			this.navigate('blog', {trigger: true})
		}
	},
	login() {
		if (session.get('user-token')) {
			this.navigate('blog', {trigger: true})
		} else {
			$container.empty();
			let loginForm = new LoginForm({
				session: session,
				router: this,
				model: session
			});
			var loginPage = new NavContainer({
				model: session,
				children: [loginForm]
			});
			loginPage.render();
			$container.append(loginPage.el)
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
		if (this.protectedRoute()) {
			posts.fetch();
			$container.empty();
			// var postsList = new PostsList({collection: posts});
			var previewPage = new NavContainer({model: session, children: [new PostsList({collection: posts})]});
			previewPage.render();
			$container.append(previewPage.el)
		}
	},
	newBlog() {
		if (this.protectedRoute()) {
			$container.empty();
			var blogForm = new BlogForm({collection: posts});
			var newBlogPage = new NavContainer({model: session, children: [blogForm]});
			newBlogPage.render();
			$container.append(newBlogPage.el)
		}
	}
});

export default new Router();
