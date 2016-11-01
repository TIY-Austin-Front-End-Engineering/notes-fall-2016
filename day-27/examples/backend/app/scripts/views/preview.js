import $ from 'jquery';
import previewItem from './previewListItem';

export default function(posts) {
	let list = $('<ul class="post-list"></ul>');
	posts.forEach((post, i, arr) => {
		list.append(previewItem(post))
	})
	posts.on('update', () => {
		list.empty();
		posts.forEach((post, i, arr) => {
			list.append(previewItem(post))
		});
	});
	return list;
}
