var settings = {
	url: 'https://api.github.com/users/nicerhugs',
	type: 'GET',
	// when the data comes back, do something with it
	success: function(data) {
		var username = $('<h1>' + data.login + '</h1>');
		$('body').prepend(username)
		console.log(data.login);
	},
	error: function(xhr, status, error) {
		console.log('github request did not work', error);
	}
};

$.ajax(settings);
