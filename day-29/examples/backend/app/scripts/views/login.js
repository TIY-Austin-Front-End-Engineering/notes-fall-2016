import $ from 'jquery';
import Backbone from 'backbone';

const LoginForm = Backbone.View.extend({
	tagName: 'form',
	template() {
		return `
			<input value="jess@jess.com" id="email" type="email" placeholder="email">
			<input value="password" id="password" type="password" placeholder="password">
			<input id="submit" type="submit" value="login">
			<div>${this.model.get('errorMessage') || ''}</div>
			Not a member? <a href="#register">Register here</a>
		`
	},
	render() {
		this.$el.empty();
		this.$el.append(this.template())
	},
	events: {
		'submit': 'handleSubmit'
	},
	handleSubmit(e) {
		e.preventDefault();
		const email = this.$('#email').val();
		const password = this.$('#password').val();
		this.model.login(email, password);
	},
});

export default LoginForm;
