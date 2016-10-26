import $ from 'jquery';

function renderNewPostForm(posts) {
	const element = $(`
		<form class="new-post">
			<input type="text" name="title" placeholder="title">
			<textarea placeholder="your post goes here..."></textarea>
			<input type="submit" name="name" value="save">
		</form>
	`);
	element.on('submit', function(e) {
		e.preventDefault();
		const title = $(this).find('input[type="text"]').val();
		const body = $(this).find('textarea').val();
		posts.create({title, body}, {
			success: () => {
				console.log('it worked!');
				location.hash = 'posts'
			}
		})
	});
	return element;
}

export default renderNewPostForm;
