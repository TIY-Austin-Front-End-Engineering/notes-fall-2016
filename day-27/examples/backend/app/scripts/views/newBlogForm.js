import $ from 'jquery';
import config from '../config';

export default function(posts, session) {
	let form = $(`
		<form>
			<input type="text" id="title" placeholder="title">
			<textarea id="body" placeholder="type away.."></textarea>
			<input type="submit" value="submit">
		</form>
	`)

	form.on('submit', (e) => {
		e.preventDefault();
		const title = form.find('#title').val();
		const body = form.find('#body').val();
		posts.create({title, body},{
			// headers: {
			// 	'application-id': config.appId,
			// 	'secret-key': config.secret,
			// 	'application-type': 'REST',
			// 	'user-token': session.get('user-token')
			// }
		})
	})
	return form;
}
