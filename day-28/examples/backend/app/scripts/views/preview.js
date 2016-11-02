import $ from 'jquery';
import Backbone from 'backbone';
import PreviewItem from './previewListItem';

export default Backbone.View.extend({
	tagName: 'ul',
	className: 'post-list',
	render() {
		this.$el.empty();
		this.collection.forEach((post, i, arr) => {
			let previewItem = new PreviewItem({model: post});
			previewItem.render();
			this.$el.append(previewItem.el)
		});
	}
});

// export default function(posts, session) {
// 	let list = $(`
// 		<div>
// 			<nav><input id="logout" type="button" value="logout"></nav>
// 			<ul class="post-list"></ul>
// 		</div>
// 	`);
// 	posts.forEach((post, i, arr) => {
// 		list.append(previewItem(post))
// 	})
// 	posts.on('update', () => {
// 		list.find('ul').empty();
// 		posts.forEach((post, i, arr) => {
// 			list.append(previewItem(post))
// 		});
// 	});
// 	list.find('#logout').on('click', (e) => {
// 		session.logout();
// 	});
// 	return list;
// }
