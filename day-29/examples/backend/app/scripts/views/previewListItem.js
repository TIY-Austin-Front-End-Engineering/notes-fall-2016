import $ from 'jquery';
import Backbone from 'backbone';

export default Backbone.View.extend({
	tagName: 'li',
	template() {
		return `
			<a href="#blog/${this.model.id}">${this.model.get('title')}</a>
		`
	},
	render() {
		this.$el.append(this.template());
	}
});

// export default function(post) {
// 	let item = $(`
// 		<li>
// 			<a href="#blog/${post.id}">${post.get('title')}</a>
// 		</li>
// 	`);
// 	return item;
// }
