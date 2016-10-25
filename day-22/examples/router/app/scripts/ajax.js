import $ from 'jquery';

var unicorn = {
	name: 'Amalthea',
	color: 'white',
	age: 593
}

const getSettings = {
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
	// url: 'http://tiny-za-server.herokuapp.com/collections/unicorns/580f6aa0d35fa30300445f20',
	type: 'GET',
	dataType: 'application/json',
};
const postSettings = {
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
	type: 'POST',
	contentType: 'application/json',
	data: JSON.stringify(unicorn),
	success: (data) => {
		console.log(data);
	}
};
const putSettings = {
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns/580f6aa0d35fa30300445f20',
	type: 'put',
	contentType: 'application/json',
	data: JSON.stringify({age: 600})
}
const deleteSettings = {
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns/580f6aa0d35fa30300445f20',
	type: 'delete'
}

// $.ajax(postSettings);
