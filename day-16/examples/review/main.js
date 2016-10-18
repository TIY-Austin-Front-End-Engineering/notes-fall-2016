var data = [
	{
		title: 'cool Blog Post',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}, {
		title: 'Another Post',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}, {
		title: 'my third post',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}
];

var $nav = $('nav');
var $main = $('main');

function renderNavItem(post) {
	// create each nav element one at a time
	var navItem = $('<a href="#"><h2>' + post.title + '</h2></a>');

	// click on a post and go to the post
	navItem.on('click', function(e) {
		var article = $('<article></article>');
		var button = $('<button type="button" name="button">Back to list</button>');
		var h2 = $('<h2 class="blog-post-title">' + post.title + '</h2>');
		var p = $('<p class="blog-post-body">' + post.body + '</p>');
		// hide the nav
		$nav.hide();
		// show the post
		article.append(button, h2, p);
		button.on('click', function() {
			// remove the article from the main
			$main.html('');
			// show the nav
			$nav.show();
		});
		$main.append(article);
	});
	return navItem;
}

// show homepage with list of posts
// create all the nav elements in a list
var navItems = data.map(renderNavItem);

navItems.forEach(function(a, i, arr) {
	// put each one in the dom in the empty nav
	$nav.append(a);
});


// click on back and go back to list of posts
