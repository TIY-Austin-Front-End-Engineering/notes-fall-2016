import $ from 'jquery';
import secret from './config';

var session = {};

function userSignup(email, password) {
	$.ajax({
		type: 'POST',
		url: ' https://api.backendless.com/v1/users/register',
		contentType: 'application/json',
		headers: {
			'application-id': 'E196DF93-C9E9-BC53-FFA6-B7870F8AD100',
			'secret-key': secret,
			'application-type': 'REST'
		},
		data: JSON.stringify({
			email: email,
			password: password
		}),
		success(response) {
			console.log(response);
		}
	})
}

// userSignup('nicerhugs@mail.com', 'password');

function userLogin(login, password) {
	$.ajax({
		type: 'POST',
		url: ' https://api.backendless.com/v1/users/login',
		contentType: 'application/json',
		headers: {
			'application-id': 'E196DF93-C9E9-BC53-FFA6-B7870F8AD100',
			'secret-key': secret,
			'application-type': 'REST'
		},
		data: JSON.stringify({
			login: login,
			password: password
		}),
		success(response) {
			session.token = response['user-token'];
			session.id = response.objectId;
			updateUser('schmess')
		}
	})
}

function updateUser(name) {
	$.ajax({
		type: 'PUT',
		url: ' https://api.backendless.com/v1/users/' + session.id,
		contentType: 'application/json',
		headers: {
			'application-id': 'E196DF93-C9E9-BC53-FFA6-B7870F8AD100',
			'secret-key': secret,
			'application-type': 'REST',
			'user-token': session.token
		},
		data: JSON.stringify({
			name: name
		}),
		success(response) {
			console.log(response);
		}
	})
}

userLogin('nicerhugs@mail.com', 'password');

// // where model is an instance of a backbone model
// model.save({name: 'jess'},{
// 	success: function() {},
// 	headers: {
// 		'application-id': 'E196DF93-C9E9-BC53-FFA6-B7870F8AD100',
// 		'secret-key': '29089687-63FC-A6C3-FF17-C72D5D4FC400',
// 		'application-type': 'REST',
// 		'user-token': session.token
// 	},
// })
