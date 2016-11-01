import Backbone from 'backbone';
import $ from 'jquery';
import config from '../config';
import router from '../router';

export default Backbone.Model.extend({
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
			headers: {
				'application-id': config.appId,
				'secret-key': config.secret,
				'application-type': 'REST'
			},
			data: JSON.stringify({email, password}),
			success: () => {
				this.login(email, password)
			}
		})
	},
	login(email, password) {
		$.ajax({
			type: 'POST',
			url: 'https://api.backendless.com/v1/users/login',
			contentType: 'application/json',
			headers: {
				'application-id': config.appId,
				'secret-key': config.secret,
				'application-type': 'REST'
			},
			data: JSON.stringify({login: email, password}),
			success: (response) => {
				this.set(response);
				router.navigate('blog', {trigger: true})
			}
		})
	}
});
