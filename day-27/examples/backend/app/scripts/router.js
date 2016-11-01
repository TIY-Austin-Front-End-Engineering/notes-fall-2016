import Backbone from 'backbone';
import $ from 'jquery';
import Session from './models/session';
import Posts from './collections/posts';
import loginForm from './views/login';
import registerForm from './views/register';
import postsList from './views/preview';
import createForm from './views/newBlogForm';
import config from './config'

let session = new Session();
let posts = new Posts();
let $container = $('.container');

// intercept all ajax requests and run this callback first
$(document).ajaxSend((evt, xhr, opts) => {
	console.log('interception!');
	// opts is the jquery settings object. it is read only, but we could use it if we needed to do different things based on what request we are making
	console.log(opts.type);

	// xhr is the raw ajax request, and we can modify it to make changes, like this example that sets headers:
	xhr.setRequestHeader('application-id', config.appId)
	xhr.setRequestHeader('secret-key', config.secret)
	xhr.setRequestHeader('application-type', 'REST')
	if (session.get('user-token')) {
		xhr.setRequestHeader('user-token', session.get('user-token'));
	}
})

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
			$container.append(loginForm(session));
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
			$container.append(postsList(posts));
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
