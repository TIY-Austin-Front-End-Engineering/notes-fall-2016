import $ from 'jquery';

export default function(session) {
	const form = $(`
		<form class="login">
			<input value="jess@jess.com" id="email" type="email" placeholder="email">
			<input value="password" id="password" type="password" placeholder="password">
			<input type="submit" value="login">
			Not a member? <a href="#register">Register here</a>
		</form>
	`)

	form.on('submit', function(e) {
		e.preventDefault();
		const email = form.find('#email').val();
		const password = form.find('#password').val();
		session.login(email, password);
	})
	return form;
}
