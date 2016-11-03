import $ from 'jquery';

export default function(session) {
	const form = $(`
		<form class="register">
			<input id="email" type="email" placeholder="email" value="jess@jess.com">
			<input id="password" type="password" placeholder="password" value="password">
			<input id="confirmPw" type="password" placeholder="confirm password" value="password">
			<input type="submit" value="register">
			<div>${this.model.get('errorMessage')}</div>
			Already a member? <a href="#login">Login here</a>
		</form>
	`);

	form.on('submit', (e) => {
		e.preventDefault();
		const email = form.find('#email').val();
		const password = form.find('#password').val();
		const confirmPw = form.find('#confirmPw').val();
		if (session.validatePassword(password, confirmPw)){
			session.register(email, password);
		} else {
			alert('pws, they don\'t match');
		}
	})

	return form;
}
