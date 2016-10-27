import $ from 'jquery';

function renderForm(collection) {
	const form = $(`
		<form>
			<input id="name" type="text" name="name" placeholder="name">
			<input id="color" type="text" name="color" placeholder="color">
			<input id="age" type="text" name="age" placeholder="age">
			<input type="submit" value="submit">
		</form>`
	);
	form.on('submit', (e) => {
		e.preventDefault();
		collection.create({
			name: form.find('#name').val(),
			color: form.find('#color').val(),
			age: form.find('#age').val()
		});
	})
	collection.on('invalid', (model, error, options) => {
		console.log('that didn\'t save', error);
	})
	
	return form;
}

export default renderForm;
