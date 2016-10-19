var input = document.getElementById('user-thought');
var button = document.querySelector('#submit-thought');
var form = document.querySelector('form');

function submitThoughtHandler(e) {
	console.log(e);
	// ask which key they pressed,
	if (e.keyCode === 13 || e.type === 'click') {
		e.preventDefault();
		//if it's enter
			// store the value of the input
			var userThought = input.value;
			console.log(userThought);
			// clear the input out
			input.value = '';
	}
}

input.addEventListener('keydown', submitThoughtHandler);
button.addEventListener('click', submitThoughtHandler);

// do the above with only one listener using the form:
// form.addEventListener('submit', submitThoughtHandler);
