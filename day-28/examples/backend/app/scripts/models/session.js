import Backbone from 'backbone';
import $ from 'jquery';
import config from '../config';
import router from '../router';

export default Backbone.Model.extend({
	initialize() {
		if (window.localStorage.getItem('user-token')) {
			this.set('user-token', window.localStorage.getItem('user-token'))
		}
	},
	idAttribute: 'objectId',
	defaults: {
		name: '',
		email: '',
		'user-token': ''
	},
	validatePassword(pw, confirmPw) {
		if (pw.trim() && pw === confirmPw) return true;
		return false;
	},
	register(email, password) {
		$.ajax({
			type: 'POST',
			url: 'https://api.backendless.com/v1/users/register',
			contentType: 'application/json',
			data: JSON.stringify({email, password}),
			success: () => {
				this.login(email, password)
			}
		})
	},
	logout() {
		$.ajax({
			url: 'https://api.backendless.com/v1/users/logout',
			success: () => {
				this.clear();
				window.localStorage.clear();
				router.navigate('login', {trigger: true});
			}
		})
	},
	login(email, password) {
		$.ajax({
			type: 'POST',
			url: 'https://api.backendless.com/v1/users/login',
			contentType: 'application/json',
			data: JSON.stringify({login: email, password}),
			success: (response) => {
				this.set(response);
				window.localStorage.setItem('user-token', response['user-token'])
				router.navigate('blog', {trigger: true})
			}
		})
	}
});
