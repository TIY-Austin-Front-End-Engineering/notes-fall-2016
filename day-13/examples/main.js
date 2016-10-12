
function helloWorld(name, age) {
	return 'hello, ' + name + ', you are ' + age + ' years old';
}

console.log(helloWorld); // this will print out the whole function definition

helloWorld('Jess', 32);
helloWorld('Gil', 25);
helloWorld('Ben', 29);

// we can use helloWorld as a callback! We just don't invoke it.
document.querySelector('body').addEventListener('click', helloWorld);

// storing the evaluation of the function
var helloStatement = helloWorld('Max', 28);
console.log(helloStatement);

// printing the evaluation without storing it first.
console.log(helloWorld('jess', 32))

document.querySelector('.special-topic').addEventListener('click', function(e) {
	e.target.textContent = 'you clicked here!'
})

// get all the boxes
var boxes = document.querySelectorAll('.boxes');

function clickHandler(e) {
	// get the text content of the box that was clicked on
	var currentText = e.target.textContent;
	// add one to text content of the box that was clicked on and put into dom
	// currentText++;
	e.target.textContent = Number(currentText) + 1;
}

for (var i = 0; i < boxes.length; i++) {
// in the i box, write i
	boxes[i].textContent = i;

// everytime we click on a box, add 1 to it's number
	// add event listener to each box
	boxes[i].addEventListener('click', clickHandler);
}

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var alphaArray = alphabet.split('');
var reversedAlpha = alphaArray.reverse();
console.log(alphaArray);
console.log(reversedAlpha);

var newString = alphaArray.join('');
console.log(newString);


//
