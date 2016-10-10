// var body = document.querySelector('body');
//
// console.dir(body); // body is an html element so we must use console.dir
//
// body.ondblclick = function() {
// 	console.log('hi');
// }
//

// var li = document.querySelector('li:nth-of-type(2n)');
//
// console.log(li);
//
// var important = document.getElementById('theImportantListItem');
//
// console.log(important);
//
// var shoppingList = document.getElementsByClassName('shopping-item');
//
// console.log(shoppingList);
//
// var importantOnes = document.querySelectorAll('#theImportantListItem');
//
// console.log(importantOnes);

// HTMLelement.addEventListener('eventName', function() {
// 	// write code here
// })

// look through the document to find the element
var el = document.querySelector('li:nth-of-type(2)');
// once the element is found, add event listener
var text = 'fish';

el.addEventListener('click', function() {
	var text = el.innerHTML;
	var substring = 'cheese';
	console.log(text.indexOf(substring));

	// if (text === 'cheese') {
	// 	el.innerHTML = text + '!';
	// } else if (text === 'mozzarella') {
	// 	el.innerHTML = text + '!!';
	// } else {
	// 	el.innerHTML = 'cheese'
	// }

	// if ((text === 'cheese') || (text === 'mozzarella')) {
	// 	el.innerHTML = text + '!'
	// }

	// add an exclamation point to the item if the item CONTAINS 'cheese'
	// ask if the string contains the substring 'cheese'
	if (text.indexOf(substring) > -1) {
		el.innerHTML = text + '!';
	} else {
		el.innerHTML = 'cheese';
	}
	// if yes add an exclamation point
	// if no change the value to cheese

	// find out what is in that list item
	// console.log(el.innerHTML);
	// add an '!' to the value of el.innerHTML
	// console.log(text + '!');

	// look for the word cheese
	// replace it with the word cheeze


	// look for the word cheese
	if (text.indexOf('cheese') > -1) {
		text = el.innerHTML;
		// find the s inside cheese
		// find where cheese starts
		var cheeseIndex = text.indexOf('cheese');
		var sIndex = text.indexOf('s', cheeseIndex);
		// change that s to a z
		// get the part of the string that doesn't start with cheese
		// reuse it
		var str1 = text.substring(0, cheeseIndex);
		var str2 = 'cheeze';
		var str3 = text.substring(cheeseIndex + 6);

		// add on 'cheeze'
		// add on whatever came after 'cheese' to the end
		console.log(str1, str2, str3);
		el.innerHTML = str1 + str2 + str3;
	}
});

console.log(text);











//
