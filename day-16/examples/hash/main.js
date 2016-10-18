var data = [{
    title: 'cool Blog Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
    title: 'Another Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
    title: 'my third post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}];

var $nav = $('nav');
var $main = $('main');

function handleHash(e) {
	console.log('hash change occurred');
	if (location.hash === '') {
		renderNav();
	} else {
		var postNum = location.hash.split('/')[1];
		renderPost(data[postNum]);
	}
}

$(window).on('hashchange', handleHash);


function renderPost(post) {
	//hide list
	$nav.hide();
    // show the post
    var article = $('<article></article>');
    var button = $('<a href="#">Back to list</a>');
    var h2 = $('<h2 class="blog-post-title">' + post.title + '</h2>');
    var p = $('<p class="blog-post-body">' + post.body + '</p>');
    article.append(button, h2, p);
    $main.append(article);
}

function renderNav() {
	$main.html('');
	// show the nav
	$nav.show();
}

function renderNavItem(post, i, arr) {
    // create each nav element one at a time
    var navItem = $('<a href="#posts/' + i + '"><h2>' + post.title + '</h2></a>');
    return navItem;
}

// show homepage with list of posts
// create all the nav elements in a list
var navItems = data.map(renderNavItem);
navItems.forEach(function(a, i, arr) {
		// put each one in the dom in the empty nav
		$nav.append(a);
});

// when page loads, ask the hash what it is, and render it approparitately.
handleHash();
