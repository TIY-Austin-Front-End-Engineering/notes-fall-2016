var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

function getJSinstructors() {
	// make a list to store the answers
	var answers = [];
	// go through each thing in the list one at a time
	for (var i = 0; i < instructors.length; i++) {
		// read the teaches property ask "is it javascript?"
		if (instructors[i].teaches === 'JavaScript') {
			// if it is - add that person's firstname to the list
			answers.push(instructors[i].firstname);
		}
			// if it is not? - do nothing
	}
	// print or return the list of answers
	return answers;
}

console.log(getJSinstructors());

function getKeyFromList(value, key, list) {
	// make a list to store the answers
	var answers = [];
	// go through each thing in the list one at a time
	for (var i = 0; i < list.length; i++) {
		// read the key property ask "is it value?"
		if (list[i][key] === value) {
			// if it is - add that person's firstname to the list
			answers.push(list[i]);
		}
			// if it is not? - do nothing
	}
	// print or return the list of answers
	return answers;
}

console.log(getKeyFromList('JavaScript', 'teaches', instructors));

// manipulate a string
function reverse(str) {
	// make a place to keep the answer
	// break up the string into letters
	// start at the end of the list of letters and work backwards through it
	// for each letter write it down in a new string
	// return the string.

	// split the string into a list of letters
	var listOfLetters = str.split('');
	// reverse the list of letters
	var reversedArray = listOfLetters.reverse();
	// rejoin the list of letters into a string
	var answer = reversedArray.join();
	// return the new string;
	// return answer;
	return str.split('').reverse().join();
}

// caching elements by storing them in varibables saves computer effort
// document.querySelector('num1')
// document.querySelector('num1')
// document.querySelector('num1')
// document.querySelector('num1')
// var input = document.querySelector('num1');

// you can still ask for its value multiple times
// input.value;
// input.value;
// input.value;
// input.value;
// input.value;

// when i click on a tab something happens
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var displayArea = document.querySelector('.display-area');
// ask location.hash what tab the user wants to see
if (location.hash === '#red') {
	displayArea.textContent = 'you are reading red content';
} else if (location.hash === '#blue'){
	displayArea.textContent = 'you are reading blue content';
} else {
	displayArea.textContent = 'you are reading green content';
}
// display that content to them
red.addEventListener('click', function() {
	// add the appropriate text to the display area
	// ?? display area?
	location.hash = 'red';
	displayArea.textContent = 'you are reading red content';
})
blue.addEventListener('click', function() {
	// add the appropriate text to the display area
	// ?? display area?
	location.hash = 'blue';
	displayArea.textContent = 'you are reading blue content';
})
green.addEventListener('click', function() {
	// add the appropriate text to the display area
	// ?? display area?
	location.hash = 'green';
	displayArea.textContent = 'you are reading green content';
})

window.addEventListener('hashchange', function() {
	console.log(location.hash);
})


//
