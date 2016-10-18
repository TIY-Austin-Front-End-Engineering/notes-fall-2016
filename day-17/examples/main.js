var container = $('.container');

function savePost(e, form) {
	e.preventDefault();
	// get values from user input
	var post = {
		title: form.find('.title').val(),
		body: form.find('.body').val()
	};
	// validate values (we'll skip for now)
	// send to server
	var settings = {
		url: 'http://tiny-za-server.herokuapp.com/collections/blog_posts',
		type: 'POST',
		success: function(data, status, xhr) {
			// navigate to post list
			location.hash = '';
		},
		error: function() {
			// log an error
			console.log('the post didn\'t work');
		},
		contentType: 'application/json',
		data: JSON.stringify(post)
	};
	console.log(post);
	$.ajax(settings)
}

function renderForm() {
	container.empty();
	var form = $('<form>'+
		'<input class="title" type="text" placeholder="title">' +
		'<textarea class="body" placeholder="body"></textarea>' +
		'<input class="submit" type="submit" value="submit">' +
	'</form>');
	form.find('.submit').on('click', function(e) {
		savePost(e, form);
	});
	container.append(form);
}

function renderList() {
	container.empty();
	var ul = $('<ul class="post-list"><ul>');
	var settings = {
		url: 'http://tiny-za-server.herokuapp.com/collections/blog_posts',
		type: 'GET',
		success: function(data, status, xhr) {
			data.sort()
			data.forEach(function(post, i, arr) {
				// make an li
				var li = $('<li><a href="#posts/'+post._id+'">'+post.title+'</a></li>');
				// put the title in the li
				// put the link in the li
				// put the li in the ul
				ul.append(li);
			})
		},
		error: function() {
			console.log('get request did not work');
		}
	};
	$.ajax(settings);
	container.append(ul);
}

function renderPost() {
	container.empty();
	// request post from server
	// when it comes back, put the data on the page
}

function handleHashChange(e) {
	var requestedSite = location.hash;

	if (requestedSite === '#create') {
		// put the form on the page
		renderForm();
	} else if (requestedSite === '') {
		renderList();
	} else if (requestedSite.indexOf('#posts/') > -1) {
		renderPost();
	}
}

$(window).on('hashchange', handleHashChange);

handleHashChange();
