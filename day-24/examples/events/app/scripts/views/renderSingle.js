import $ from 'jquery';

function renderSingle(model) {
	const li = $(`
		<li>
			${model.get('name')}
			<button>delete</button>
		</li>
	`);
	li.on('click', (e) => {
		console.log(model.get('_id'));
	})
	li.find('button').on('click', (e) => {
		model.destroy();
	})
	return li;
}

export default renderSingle;
