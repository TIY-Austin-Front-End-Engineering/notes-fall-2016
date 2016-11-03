import Backbone from 'backbone';

export default Backbone.View.extend({
	tagName: 'form',
	template() {
		return `
			<input type="text" id="title" placeholder="title">
			<textarea id="body" placeholder="type away.."></textarea>
			<input type="submit" value="submit">
		`
	},
	render() {
		this.$el.append(this.template());
	},
	events: {
		'submit': 'submitHandler'
	},
	submitHandler(e) {
		e.preventDefault();
		const title = this.$('#title').val();
		const body = this.$('#body').val();
		this.collection.create({title, body})
	}
});

// import $ from 'jquery';
// import config from '../config';
//
// export default function(posts, session) {
// 	let form = $(`
// 		<form>
// 			<input type="text" id="title" placeholder="title">
// 			<textarea id="body" placeholder="type away.."></textarea>
// 			<input type="submit" value="submit">
// 		</form>
// 	`)
//
// 	form.on('submit', (e) => {
// 		e.preventDefault();
// 		const title = form.find('#title').val();
// 		const body = form.find('#body').val();
// 		posts.create({title, body})
// 	})
// 	return form;
// }
