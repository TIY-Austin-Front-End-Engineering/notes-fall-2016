// var submit = document.querySelector('form [type=submit]');
// console.log(submit);
//
// submit.addEventListener('click', function(e){
// 	e.preventDefault();
// 	console.log(e);
// })

var form = document.querySelector('form');

form.addEventListener('submit', function(e){
	e.preventDefault();
	console.log(e);
})

var input = document.querySelector('[type=password]');

input.addEventListener('keyup', function(e) {
	var userPassword = e.target.value.trim();
	// one option for writing an object literal
	var userInput = {};
	input.password = userPassword;
	// another option for writing an object literal
	var userInput = {
		password: userPassword
	}
	if (!userPassword) {return false}
	else {console.log(userInput)}
})

var myArr = [
	{title: 'cool etsy item title', materials: [1,2,3,4]},
	{title: 'another fun thing to buy', materials: ['a', 'b']},
	{title: 'you\'ll love this gidget', materials: ['wood']}]
var container = $('.buy-these');

myArr.forEach(function(item, i, arr) {
	// make a list item
	var $li = $('<li></li>');
	var $materials = $('<ul></ul>')
	// in that list item we want to put the title from the array
	$li.text(item.title);
	$li.append($materials);
	item.materials.forEach(function(material, a, mats) {
		var $materialLi = $('<li>' + material + '</li>')
		$materials.append($materialLi);
	});
	// put it into the list
	container.append($li);
});


function letterCount(string) {
	// make a place to count the letters
	var counter = {};
	// go through one letter at a time
	string.split('').forEach(function(letter, i, arr) {
		// if the letter is not in the counter
		if (!counter[letter]) {
			//write it down and give it value 1
			counter[letter] = 1;
		} else {
			// add 1 to its value
			counter[letter] = counter[letter] + 1
		}
	});
	// return the counter
	return counter;
}

letterCount('hello wolrd');







//
