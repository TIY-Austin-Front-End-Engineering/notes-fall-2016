import $ from 'jquery';

export default function(post) {
	let item = $(`
		<li>
			<a href="#blog/${post.id}">${post.get('title')}</a>
		</li>
	`);
	return item;
}
