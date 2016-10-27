import $ from 'jquery';
import renderSingle from './renderSingle';

function renderList(unicorns) {
	const ul = $(`
		<ul>
		</ul>
	`);
	unicorns.forEach((unicorn) => {
		ul.append(renderSingle(unicorn));
	})
	return ul;
}

export default renderList;
