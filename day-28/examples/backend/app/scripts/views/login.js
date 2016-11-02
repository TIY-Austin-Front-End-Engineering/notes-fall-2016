import $ from 'jquery';
import Backbone from 'backbone';


const LoginForm = Backbone.View.extend({
	// we could skip the initialize fn altogether bc it's not doing anything, everythign we would do here is done by bb automatically
	initialize(options) {
		console.log(options);
		// this.name = options.name;
		// i dont' have to do this because backbone did it for me:
		// this.model = options.model;
		console.log(this.model);
	},
	// template returns the contents of the element we are trying to build
	template() {
		return `
			<input value="jess@jess.com" id="email" type="email" placeholder="email">
			<input value="password" id="password" type="password" placeholder="password">
			<input id="submit" type="submit" value="login">
			Not a member? <a href="#register">Register here</a>
		`
	},
	// render is ususally responsible for stuffing the element (this.el) with it's contents, and if applicable, rendering children
	render() {
		this.$el.append(this.template())
	},
	events: {
		// if we only wanted click events we could target the button like this:
		// 'click #submit': 'handleSubmit'
		'submit': 'handleSubmit'
	},
	handleSubmit(e) {
		e.preventDefault();
		// with `this` we have access to all of jquery namespaced to our element
		const email = this.$('#email').val();
		const password = this.$('#password').val();
		console.log(email, password);
		this.model.login(email, password);
	},

	// the default value of tagName is 'div'
	tagName: 'form',
});

export default LoginForm;

// export default function(session) {
// 	const form = $(`
// 		<form class="login">
// 			<input value="jess@jess.com" id="email" type="email" placeholder="email">
// 			<input value="password" id="password" type="password" placeholder="password">
// 			<input type="submit" value="login">
// 			Not a member? <a href="#register">Register here</a>
// 		</form>
// 	`)
//
// 	form.on('submit', function(e) {
// 		e.preventDefault();
// 		const email = form.find('#email').val();
// 		const password = form.find('#password').val();
// 		session.login(email, password);
// 	})
// 	return form;
// }
